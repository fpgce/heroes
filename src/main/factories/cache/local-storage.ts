import { Cache } from '@/infra/cache/local-storage'

export const makeCacheStorage = (): Cache => {
    return new Cache()
}
