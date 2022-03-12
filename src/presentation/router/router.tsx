import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import '@/presentation/styles/global.scss'

import { MakeHomeScreen } from '@/main/factories/pages/home-factory'
import { MakeFavoriteComics } from '@/main/factories/pages/favorite-comics-factory'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MakeHomeScreen />} />
        <Route path="/favorites" element={<MakeFavoriteComics />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
