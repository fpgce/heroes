import { AxiosHttpClient } from '@/infra/http/axios-http-client'
import { AuthorizeHttpClientDecorator } from '@/main/decorators/authorize-http-client-decorator'

export const makeAxiosHttpClient = (): AxiosHttpClient => {
    return new AuthorizeHttpClientDecorator(new AxiosHttpClient())
}
