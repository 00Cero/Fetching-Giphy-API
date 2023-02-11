import React from 'react'

import { useGifFetch } from '../hooks/useGifFetch'
import GifCard from './GifCard'

function GifGrid( {category} ) {

  const { gifs, isLoading } = useGifFetch(category)

  return (
    
    <div className='gifGrid'>
      { isLoading && <p>Cargando...</p>}
      <h2> { category } </h2>
      <section className='card-grid'>
        {gifs.map( gif => <GifCard
          key= {gif.id}
          {...gif}
        />)}
      </section>
    </div>
  )
}

export default GifGrid
