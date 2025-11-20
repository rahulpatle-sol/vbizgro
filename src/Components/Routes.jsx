import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from '../Pages/Hero';
const RouteAll = () => {
  return (
   <Routes>
<Route path='/' element={<Hero></Hero>}></Route>
   </Routes>
  )
}

export default Routes;
