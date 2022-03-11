import { GetStorage } from '@/data/protocols/cache'
import { Comic } from '@/domain/models'
import { LoadFavoriteComics } from '@/domain/usecases/load-favorite-comic'

export class LoadLocalFavoriteComics implements LoadFavoriteComics {
  constructor(private key: string, private cache: GetStorage) {}

  load(): Comic[] {
    const cache = this.cache.get(this.key)

    if(!cache) return []

    const favorites = JSON.parse(cache)
    
    return Object.values(favorites)
  }
}
