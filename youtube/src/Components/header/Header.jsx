import React from 'react'
import './header.scss';
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import {MdOutlineNotifications, MdApps} from "react-icons/md"

export default function Header() {
  return (
    <div className='border border-dark header'>
      <FaBars className='header__menu' size={26}/>
      <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" 
       alt="youtube" 
        className='header__logo'
       />

      <form>
      <input type="text" placeholder='Search'/>
      <button type='submit'>
        <AiOutlineSearch size={22}/>
      </button>
      </form>

      <div className="header__icons">
        <MdOutlineNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png" alt="avatar" />
      </div>

    </div>
  )
}
