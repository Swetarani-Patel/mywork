import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from '../about/About';
import Product from '../product/Product';
import Home from '../home/Home';
import Contact from '../contact/Contact';
import ProductDetails from '../productDetails/ProductDetails';



function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/cart' element={<Cart/>}/> */}
    </Routes>
  )
}

export default AllRoutes
