import React, { useCallback, useEffect, useRef, useState } from 'react'

import styles from './home-styles.scss'

import Card from '@/presentation/components/card-movie/card-movie'
import Input from '@/presentation/components/input/input'
import Loading from '@/presentation/components/loading/loading'
import { Menu } from '@/presentation/components/menu/menu'

import {
  LoadComics,
  LoadComicParams,
  UpdateFavoriteComics,
  UpdateFavoriteComicsParams,
  CheckIsFavoriteSync
} from '@/domain/usecases'
import { Comic } from '@/domain/models'

interface Props {
  comics: LoadComics
  updateFavoriteComics: UpdateFavoriteComics
  checkIsFavorite: CheckIsFavoriteSync
}

type loadQuery = Omit<LoadComicParams, 'limit' | 'orderBy'> & { clear: boolean }

const defaultOffsetToLimit = window.innerHeight > 800 ? 50 : 20

const Home: React.FC<Props & HTMLDivElement> = ({
  comics,
  updateFavoriteComics,
  checkIsFavorite
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const searchRef = useRef('')

  const [loading, setLoading] = useState(false)
  const [listComics, setListComics] = useState<Comic[]>([])

  async function load({ offset, titleStartsWith = '', clear }: loadQuery) {
    setLoading(true)

    const response = await comics.load({
      offset,
      titleStartsWith,
      limit: defaultOffsetToLimit,
      orderBy: 'title'
    })
    offsetRef.current = response.offset
    setListComics((prev) => (clear ? response.results : [...prev, ...response.results]))
    setLoading(false)
  }

  useEffect(() => {
    load({ offset: 0, titleStartsWith: '', clear: true })
  }, [])

  useEffect(() => {
    const onScroll = (_: Event) => {
      const container = containerRef.current
      const limit = container.offsetTop + container.offsetHeight
      const limitScroll = Math.ceil(window.innerHeight + window.scrollY)

      if (limitScroll >= limit) {
        load({
          offset: offsetRef.current + defaultOffsetToLimit,
          titleStartsWith: searchRef.current,
          clear: false
        })
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onOpen = useCallback(async (comic: Comic) => {}, [])

  const onFavorite = useCallback(async (params: UpdateFavoriteComicsParams) => {
    updateFavoriteComics.update(params)
  }, [])

  const onSubmit = useCallback(async (input: string) => {
    searchRef.current = input
    load({ offset: 0, titleStartsWith: input, clear: true })
  }, [])

  return (
    <>
      <Menu />
      <div className={styles.container} ref={containerRef}>
        <header className={styles.header}>
          <Input type='search' onSubmit={onSubmit} />
        </header>
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
        <Loading loading={loading} />
      </div>
    </>
  )
}

export default Home
