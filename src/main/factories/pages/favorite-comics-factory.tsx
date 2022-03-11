import React from 'react'
import {
  makeUpdateFavoriteComics,
  makeLoadFavoriteComics,
  makeCheckIsFavorite
} from '@/main/factories/usecases'
import FavoriteComics from '@/presentation/pages/favorite-comics/favorites'

export const MakeFavoriteComics: React.FC = (props: any) => {
  return (
    <FavoriteComics
      {...props}
      updateFavoriteComics={makeUpdateFavoriteComics()}
      loadFavoriteComics={makeLoadFavoriteComics()}
      checkIsFavorite={makeCheckIsFavorite()}
    />
  )
}
