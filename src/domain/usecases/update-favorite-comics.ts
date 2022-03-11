import { Comic } from '@/domain/models'

export type UpdateFavoriteComicsParams = Comic

export interface UpdateFavoriteComics {
  update(comic: Comic): void
}
