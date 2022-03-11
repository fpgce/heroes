import React, { memo, useRef, useState } from 'react'

import styles from './card-movie-styles.scss'
import favorited from '@/presentation/assets/favorited.png'
import unfavorited from '@/presentation/assets/unfavorited.png'
import rightarrow from '@/presentation/assets/rightarrow.png'
import { Comic, ThumbVariant } from '@/domain/models'
import { CheckIsFavoriteSync } from '@/domain/usecases'

interface Props {
  comic: Comic
  onOpen: Function
  onFavorite: Function
  checkIsFavorite: CheckIsFavoriteSync
}

const portrait_uncany: ThumbVariant = 'portrait_uncanny'
const landscape_xlarge: ThumbVariant = 'landscape_xlarge'

const getComicThumbVariant = (comic: Comic) => {
  const variant = comic.id % 2 ? portrait_uncany : landscape_xlarge
  return `${comic.thumbnail.path}/${variant}.${comic.thumbnail.extension}`
}

const CardMovie: React.FC<Props> = ({ comic, checkIsFavorite, onFavorite, onOpen }) => {
  const containerRef = useRef<HTMLDivElement>()
  const isFvt = checkIsFavorite.check(comic.id)
  const [isFavorited, setIsFavorited] = useState(isFvt)
  const img = isFavorited ? <img src={favorited} /> : <img src={unfavorited} />

  const handleFavorited = () => {
    setIsFavorited((prev) => !prev)
    onFavorite(comic)
  }

  const getRedirect = () => {
    if (!comic.urls.length) return null
    return (
      <a className={styles.btn} href={comic.urls[0].url} target="_blank">
        <img src={rightarrow} />
      </a>
    )
  }

  function onLoadImage() {
      if(comic.thumbnail.path.includes('image_not_available')){
        containerRef.current.classList.add(styles.hide)
      };
      containerRef.current.classList.add(styles.containerVisible)
  }

  return (
    <div ref={containerRef} onClick={() => onOpen(comic)} className={styles.container}>
      <div className={styles.imageWrapper}>
        <img onLoad={onLoadImage} src={getComicThumbVariant(comic)} alt="" />
      </div>
      <div className={styles.footer}>
        <p>{comic.title}</p>
      </div>
      <div className={styles.submenu}>
        <div className={styles.btn} onClick={handleFavorited}>
          {img}
        </div>
        {getRedirect()}
      </div>
    </div>
  )
}

export default memo(CardMovie)
