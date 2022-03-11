import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { LoadComics } from '@/domain/usecases/load-comics'
import { RemoteLoadComic } from '@/data/usecases/remote-load-comic'
import { makeCacheStorage } from '../cache/local-storage'

export const makeLoadComics = (): LoadComics => {
  const cacheKey = 'load-comics'
  const url = makeApiUrl('/v1/public/comics')
  const httpClient = makeAxiosHttpClient()
  const cache = makeCacheStorage()

  return new RemoteLoadComic(cacheKey, url, httpClient, cache)
}
