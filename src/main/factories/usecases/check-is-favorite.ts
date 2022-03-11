import { makeCacheStorage } from '../cache/local-storage'
import { CheckIsFavoriteSync } from '@/domain/usecases'
import { CheckLocalFavoriteSyncComic } from '@/data/usecases/check-local-favorite-sync-comic'

export const makeCheckIsFavorite = (): CheckIsFavoriteSync => {
  const cacheKey = 'comics-keys'
  const cache = makeCacheStorage()

  return new CheckLocalFavoriteSyncComic(cacheKey, cache)
}
