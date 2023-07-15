import React from 'react'
import './sidebar.scss'

import{MdOutlineSubscriptions, MdExitToApp, MdHistory, MdOutlineVideoLibrary,MdSentimentVeryDissatisfied} from "react-icons/md"
import {AiOutlineHome} from "react-icons/ai"
import {FiThumbsUp} from "react-icons/fi"

export default function Sidebar({showsideBar, handletoogle}) {
  return (
    <nav onClick={()=>handletoogle()} className={showsideBar ? "sidebar open" : "sidebar"}>
     <li>
      <AiOutlineHome size={23}/>
      <span>Home</span>
     </li>

     <li>
      <MdOutlineSubscriptions size={23}/>
      <span>Subscription</span>
     </li>

     <li>
      <FiThumbsUp size={23}/>
      <span>Liked Video</span>
     </li>

     <li>
      <MdHistory size={23}/>
      <span>History</span>
     </li>

     <li>
      <MdOutlineVideoLibrary size={23}/>
      <span>Library</span>
     </li>


     <li>
      <MdSentimentVeryDissatisfied size={23}/>
      <span>I don't know</span>
     </li>
     <hr />

     <li>
      <MdExitToApp size={23}/>
      <span>Log Out</span>
     </li>
     <hr />
    </nav>
  )
}
