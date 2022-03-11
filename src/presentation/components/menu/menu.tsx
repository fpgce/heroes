import React from 'react'
import styles from './menu-styles.scss'

import favorite from '@/presentation/assets/favorited.png'
import home from '@/presentation/assets/home.png'
import { Link } from 'react-router-dom'

export const Menu = () => {
  const isFavorite = window.location.pathname === '/favorites'
  const isHome = window.location.pathname === '/'

  return (
    <nav className={styles.menu}>
      <ul>
        <li className={isHome ? styles.active : ''}>
          <Link className={styles.btn} to="/">
            <img src={home} alt="home icon" />
          </Link>
        </li>
        <li className={isFavorite ? styles.active : ''}>
          <Link className={styles.btn} to="/favorites">
            <img src={favorite} alt="favorites icon" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
