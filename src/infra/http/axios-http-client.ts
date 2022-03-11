import { HttpRequest, HttpResponse, HttpClient } from '@/data/protocols/http'

import axios, { AxiosResponse } from 'axios'

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject({
        message: error.message,
        response: {
          status: 500,
          data: null
        }
      })
    }
    return Promise.reject(error)
  }
)

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse<any>
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      })
    } catch (error) {
      axiosResponse = error.response
    }

    const statusCode = axiosResponse.status
    const responseData = axiosResponse.data?.data

    return {
      statusCode,
      data: responseData
    }
  }
}