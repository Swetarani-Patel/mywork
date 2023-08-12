import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from './About';
import Product from './Product';
import Home from './Home';
import Contact from './Contact';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default AllRoutes
