import React from 'react'
import {
  makeLoadComics,
  makeUpdateFavoriteComics,
  makeCheckIsFavorite
} from '@/main/factories/usecases'
import Home from '@/presentation/pages/home/home'

export const MakeHomeScreen: React.FC = (props: any) => {
  return (
    <Home
      {...props}
      comics={makeLoadComics()}
      updateFavoriteComics={makeUpdateFavoriteComics()}
      checkIsFavorite={makeCheckIsFavorite()}
    />
  )
}
