import React from 'react'
import './Footer.scss'
import './Footer.css'
import { FiSend } from 'react-icons/fi'
import video2 from '../../Assets/boat.mp4'

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

      </div>
    </section>
  )
  
}
