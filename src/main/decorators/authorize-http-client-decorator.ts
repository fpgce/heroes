import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(private readonly httpClient: HttpClient) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    try {
      const API_PUBLIC_KEY = process.env.API_PUBLIC_KEY
      const API_TS = process.env.API_TS
      const API_HASH = process.env.API_HASH

      let [path, params] = data.url.split('?')

      const authorization = `&ts=${API_TS}&apikey=${API_PUBLIC_KEY}&hash=${API_HASH}`
        
      params = `?${params ? params : ''}${authorization}`

      Object.assign(data, {
        url: path + params
      })
    } catch {}

    const httpResponse = await this.httpClient.request(data)
    return httpResponse
  }
}
