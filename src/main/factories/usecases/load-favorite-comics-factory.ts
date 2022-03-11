import { LoadLocalFavoriteComics } from '@/data/usecases/load-local-favorite-comic'
import { LoadFavoriteComics } from '@/domain/usecases/load-favorite-comic'
import { Cache } from '@/infra/cache/local-storage'

export const makeLoadFavoriteComics = (): LoadFavoriteComics => {
  const cacheKey = 'comics'
  return new LoadLocalFavoriteComics(cacheKey, new Cache())
}
