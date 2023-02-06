import React from 'react'
import MovieCard from '../components/MovieCard/MovieCard'
import './MovieListe.css'

const MovieListe = ({ movies, del,filtera}) => {
  console.log(filtera)
  return (
    <div className='move'>
        {movies.map((el)=>(
        <MovieCard  key={el.id} el={el} del={del}/>
        ))}

    </div>
  )
}

export default MovieListe