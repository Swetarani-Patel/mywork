import React from 'react'
import moment from 'moment'
import './_comment.scss'

function Comment() {
  return (
    <div className='comment p-2 d-flex'>
     <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt=""
          className="rounded-circle mr-3"
        /> 
       &nbsp;&nbsp;&nbsp; <div className="comment__body ">
            <p className='comment__header mb-1'> Sweta Patel • {moment('2020-05-05').fromNow()}</p>
            <p className='mb-0'>Fantastic video dude!!!! </p>
        </div>
    </div>
  )
}

export default Comment
