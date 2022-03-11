import { SetStorage, GetStorage } from '@/data/protocols/cache'
import { UpdateFavoriteComics, UpdateFavoriteComicsParams } from '@/domain/usecases/update-favorite-comics'

export class SaveLocalFavoriteComic implements UpdateFavoriteComics {
  constructor(private key: string, private cache: SetStorage & GetStorage) {}

  update(comic: UpdateFavoriteComicsParams): void {
    const cache = this.cache.get(this.key)

    let favorites = {}

    if (cache) {
      favorites = JSON.parse(cache)
    }
    if (favorites[comic.id]) {
      delete favorites[comic.id]
    } else {
      favorites[comic.id] = comic
    }
    const favoriteKeys = Object.keys(favorites).join('-')
    this.cache.set(this.key, JSON.stringify(favorites))
    this.cache.set(this.key + '-keys', favoriteKeys)
  }
}
