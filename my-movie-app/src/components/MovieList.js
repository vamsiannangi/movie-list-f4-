import React from 'react'
import "../App.css"

function MovieList({movies}) {
  return (
    <div className='moviesData'>
      <table className="MovieTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map((movie, index) => (
              <tr key={index}>
                <td className='firstRow'>{movie.title}</td>
                <td className='secondRow'>{movie.genre}</td>
                <td className='thirdRow'>{movie.year}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default MovieList;