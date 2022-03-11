import { GetStorage } from '@/data/protocols/cache'
import { Comic } from '@/domain/models'
import { CheckIsFavoriteSync } from '@/domain/usecases'

export class CheckLocalFavoriteSyncComic implements CheckIsFavoriteSync {
  constructor(private cacheKey: string, private cache: GetStorage) {}

  check(id: number): boolean {
    const cache = this.cache.get(this.cacheKey)
    if (!cache) return false
    return new RegExp(`\\b${id}\\b`, 'gi').test(cache)
  }
}
