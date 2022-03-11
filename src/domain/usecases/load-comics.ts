import { Comic } from '@/domain/models'

export type LoadComicParams = {
  offset: number
  limit: number
  orderBy: 'title' | 'issueNumber' | 'modified' | 'onsaleDate' | 'focDate'
  titleStartsWith?: string
}

export type LoadComicResponse = {
  offset: number
  limit: number
  total: number
  count: number
  results: Comic[]
  message?: string
}

export interface LoadComics {
  load(params: LoadComicParams): Promise<LoadComicResponse>
}
