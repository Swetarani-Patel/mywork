import React from 'react'
import './Home.css'
import video from '../../Assets/boat.mp4'
export default function Home() {
  return (
    <section className='home'>
    <div className='overlay'>
     <video typeof="video/mp4" src={video} muted autoPlay loop></video>
    </div>

    <div className='homeContent container'>
    <div className='textDiv'>
    <span className='smallText'>
    Our Packages
    </span>
    <h1 className='homeTitle'> Search Your Holiday</h1>
    </div>
    </div>
    </section>
  )
}
