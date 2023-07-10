import React from 'react'
import './Footer.scss'
import './Footer.css'
import { FiSend } from 'react-icons/fi'
import video2 from '../../Assets/boat.mp4'
import { MdOutlineTravelExplore } from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'

export default function Footer() {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={ video2 } loop autoPlay muted type="video2/mp4"></video>
      </div>

      <div className='secContent container'>
      <div className='contactDiv flex'>
      <div className='text'>
      <small>KEEP IN TOUCH</small>
      <h2>Travel with us</h2>

      </div>

      <div className='inputDiv flex'>
        <input type='text' placeholder='Enter Email Address'/>
        <button className='btn flex' type='submit'>SEND <FiSend className='icon'/> </button>
      </div>

      </div>

      <div className='footerCard flex'>
      <div className='footerIntro flex'>
      <div className='logoDiv'>
      <a href='#' className='logo flex'>
      <MdOutlineTravelExplore className='icon'/> Travel
      </a>
      </div>

      <div className='footerParagraph'>
      orem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
       unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
         PageMaker including versions of Lorem Ipsum.
      </div>

      <div className='footerSocials'>
      <AiOutlineTwitter className='icon'/>
      <AiFillYoutube className='icon'/>
      <AiFillInstagram className='icon'/>
      <FaTripadvisor className='icon'/>
      
      </div>

      </div>

      </div>

      </div>
    </section>
  )
  
}
