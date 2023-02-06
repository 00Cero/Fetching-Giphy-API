import React from 'react'

const GifCard = ( {title, url}) => {
  
  return (
    <div className='card'>
      <img src= {url} alt= {title} />
      <p>{title.trim().length == 0 ? 'title undefined' : title}</p>
    </div>
  )
}

export default GifCard
