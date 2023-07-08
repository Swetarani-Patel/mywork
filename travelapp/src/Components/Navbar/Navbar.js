import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'


const Navbar = () => {

  const[active, setActive] = useState('navBar')

  //function to toggle navbar
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }
  //function to remove navbar

  const removeNav=()=>{
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
    <header className='header flex'>
    <div className='logoDiv'>
    <a href='#' className='logo flex'>
    <h1><MdOutlineTravelExplore className='icon'/> Travel.</h1>
    </a>
    </div>

    <div className={active}>
    <ul className='navLists flex'>
    <li className='navItem'>
    <a href='#' className='navLink'>Home</a>
    </li>

    <li className='navItem'>
    <a href='#' className='navLink'>Packages</a>
    </li>

    <li className='navItem'>
    <a href='#' className='navLink'>Shop</a>
    </li>

    <li className='navItem'>
    <a href='#' className='navLink'>About</a>
    </li>

    <li className='navItem'>
    <a href='#' className='navLink'>Pages</a>
    </li>

    <li className='navItem'>
    <a href='#' className='navLink'>News</a>
    </li>

    <li className='navItem'>
    <a href='#' className='navLink'>Contact</a>
    </li>

    <button className='btn'><a href='#'>BOOK NOW</a></button>

    </ul>
    <div onClick={removeNav} className='closeNavbar'>
     <AiFillCloseCircle className='icon'/>
    </div>
    </div>

    <div onClick={showNav} className='toogleNavbar'>
     <PiDotsNineBold className='icon'/>
    </div>
    </header>
    </section>
  )
}

export default Navbar
