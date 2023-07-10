import React from 'react'
import './Footer.scss'
import './Footer.css'
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FiSend } from 'react-icons/fi'
import video2 from '../../Assets/boat.mp4'
import { MdOutlineTravelExplore } from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'


export default function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={ video2 } loop autoPlay muted type="video2/mp4"></video>
      </div>

      <div className='secContent container'>
      <div data-aos="fade-up" className='contactDiv flex'>
      <div className='text'>
      <small>KEEP IN TOUCH</small>
      <h2>Travel with us</h2>

      </div>

      <div className='inputDiv flex'>
        <input data-aos="fade-up" type='text' placeholder='Enter Email Address'/>
        <button data-aos="fade-up" className='btn flex' type='submit'>SEND <FiSend className='icon'/> </button>
      </div>

      </div>

      <div className='footerCard flex'>
      <div className='footerIntro flex'>
      <div className='logoDiv'>
      <a href='#' className='logo flex'>
      <MdOutlineTravelExplore className='icon'/> Travel
      </a>
      </div>

      <div data-aos="fade-up" className='footerParagraph'>
      orem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
       unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
         PageMaker including versions of Lorem Ipsum.
      </div>

      <div data-aos="fade-up" className='footerSocials flex'>
      <AiOutlineTwitter className='icon'/>
      <AiFillYoutube className='icon'/>
      <AiFillInstagram className='icon'/>
      <FaTripadvisor className='icon'/>
      
      </div>

      </div>

      <div className='footerLinks grid'>

      {/* group-1 */}

      <div className='linkGroup' data-aos="fade-up">
      <span className='groupTitle'>
      OUR AGENCY
      </span>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Services
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Insurance
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Agency
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Toursim
      </li>
      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Payment
      </li>

      </div>


      {/* group-2 */}
      <div className='linkGroup' data-aos="fade-up">
      <span className='groupTitle'>
      PARTERS
      </span>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Bookings
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Rentcars
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       HostelWorld
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Trivago
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       TripAdvisor
      </li>

      </div>


     {/* group-3 */}
     <div className='linkGroup' data-aos="fade-up">
      <span className='groupTitle'>
      LAST MINUTE
      </span>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       London
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       California
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Indonesia
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Europe
      </li>

      <li className='footerList flex'>
      <FiChevronRight className='icon'/>
       Oceania
      </li>

      </div>


      </div>

      <div  className='footerDiv flex'>
      <small>BEST TRAVEL WEBSITE</small>
      <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>

      </div>

      </div>

      </div>
    </section>
  )
  
}
