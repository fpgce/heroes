import React, { useCallback, useEffect, useState } from 'react'

import styles from './favorites-styles.scss'

import Card from '@/presentation/components/card-movie/card-movie'

import {
  UpdateFavoriteComics,
  UpdateFavoriteComicsParams,
  CheckIsFavoriteSync,
  LoadFavoriteComics
} from '@/domain/usecases'
import { Comic } from '@/domain/models'
import { Menu } from '@/presentation/components/menu/menu'

interface Props {
  loadFavoriteComics: LoadFavoriteComics
  updateFavoriteComics: UpdateFavoriteComics
  checkIsFavorite: CheckIsFavoriteSync
}

const Favorites: React.FC<Props & HTMLDivElement> = ({
  loadFavoriteComics,
  updateFavoriteComics,
  checkIsFavorite
}) => {
  const [listComics, setListComics] = useState<Comic[]>([])

  function load(){
    const comics = loadFavoriteComics.load()
    setListComics(comics)
  }

  useEffect(() => {
    load()
  }, [loadFavoriteComics])

  const onOpen = useCallback(async (comic: Comic) => {}, [])

  const onFavorite = useCallback(async (params: UpdateFavoriteComicsParams) => {
    updateFavoriteComics.update(params)
    load()
  }, [])

  return (
    <>
      <Menu />
      <div className={styles.container}>
        <header></header>
        <main className={styles.main}>
          {listComics.map((comic, index) => (
            <Card
              checkIsFavorite={checkIsFavorite}
              key={`${comic.id}${index}`}
              onOpen={onOpen}
              onFavorite={onFavorite}
              comic={comic}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default Favorites
