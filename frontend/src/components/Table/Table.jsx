import React from 'react'
import './Table.css'
import { useSelector } from 'react-redux'

const Table = ({page}) => {
    const {allMovies} = useSelector((store)=> store.movie)
  return (
    <>
    <div className="table">
        <div className="table1">
            <b>Id</b>
            <b>Movie</b>
            <b>Language</b>
            <b>Genre</b>
            <b>Status</b>
            <b>Industry</b>
            <b>Duration</b>
        </div>
        {
            allMovies && allMovies.map((movies, index)=>(
        <div className="table2" key={movies._id}>
           <p>{(page - 1) *3 + index + 1}</p>
            <p>{movies?.name}</p>
            <p>{movies?.language}</p>
            <p>{movies?.genres}</p>
            <p>{movies?.status}</p>
            <p>{movies?.industry}</p>
            <p>{movies?.duration}</p>
        </div>
                
            )) 
        }
    </div>
    </>
  )
}

export default Table