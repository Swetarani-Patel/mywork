import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from '../about/About';
import Product from '../product/Product';
import Home from '../home/Home';
import Contact from '../contact/Contact';
import ProductDetails from '../productDetails/ProductDetails';
import Cart from '../cart/Cart';
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';


function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
    </Routes>
  )
}

export default AllRoutes
