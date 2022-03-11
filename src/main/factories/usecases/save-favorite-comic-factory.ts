import { SaveLocalFavoriteComic } from '@/data/usecases/update-local-favorite-comic'
import { UpdateFavoriteComics } from '@/domain/usecases/update-favorite-comics'
import { Cache } from '@/infra/cache/local-storage'

export const makeUpdateFavoriteComics = (): UpdateFavoriteComics => {
  const cacheKey = 'comics'
  return new SaveLocalFavoriteComic(cacheKey, new Cache())
}
