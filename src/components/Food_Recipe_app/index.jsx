import React from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Favorite from './pages/Favorite/Favorite'
import Details from './pages/Details/Details'

export default function FoodApp() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
            <Route path='/detail/:id' element={<Details/>}/>
        </Routes>        
    </div>
  )
}
