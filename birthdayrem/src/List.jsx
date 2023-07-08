import React from 'react'

export default function List({people}) {
  return(
    <div>
        {
            people.map((ele)=>{
                const {name, age, image, id} = ele;
                return (
                <article key={id} className='person'>
                <img src={image} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                </div>
                </article>
                    
                    
                )
            })
        }
    </div>
  )
}
