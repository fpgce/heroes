import { Comic } from '@/domain/models'

export interface LoadFavoriteComics {
  load(): Comic[]
}
