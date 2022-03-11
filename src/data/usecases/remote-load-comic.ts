import { HttpClient } from '@/data/protocols/http'
import { LoadComicParams, LoadComics, LoadComicResponse } from '@/domain/usecases/load-comics'
import { GetStorage, SetStorage } from '@/data/protocols/cache'

export class RemoteLoadComic implements LoadComics {
  constructor(
    private cacheKey: string,
    private url: string,
    private httpClient: HttpClient<LoadComicResponse>,
    private cache: GetStorage & SetStorage
  ) {}
  
  async load(params: LoadComicParams): Promise<LoadComicResponse> {
    const url = `${this.url}?offset=${params.offset}&limit=${params.limit}${
      params.titleStartsWith ? `&titleStartsWith=${params.titleStartsWith}` : ''
    }`
    
    const cache = this.cache.get(this.cacheKey)

    let cacheRequests = {}

    if (cache) {
      cacheRequests = JSON.parse(cache)
      
      if(cacheRequests[url]){
        return cacheRequests[url]
      }
    }
    const response = await this.httpClient.request({
      url,
      method: 'get'
    })
    if (response.statusCode !== 200) throw new Error(response.data.message)

    const resolvedResponse = {
      offset: response.data.offset,
      limit: response.data.limit,
      total: response.data.total,
      count: response.data.count,
      results: response.data.results,
    }
    cacheRequests[url] = resolvedResponse
    this.cache.set(this.cacheKey, JSON.stringify(cacheRequests))

    return resolvedResponse
  }
}
