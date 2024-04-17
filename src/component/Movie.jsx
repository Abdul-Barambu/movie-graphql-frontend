import React from 'react'
import { gql, useQuery } from '@apollo/client'
import UpdateMovie from './UpdateMovie';

const GET_MOVIES = gql`
{
  getAllMoviesHandler{
      id
      title
      director
      studio
      releaseYear
      movieCast
    }
  }
`

function Movie() {

  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return 'loading...';
  if (error) return 'Error Occured . . .'

  console.log(data)

  return (
    <div>
      {data.getAllMoviesHandler.map(movie => (
        <div key={movie.id}>
          <p>{movie.id}</p>
          <p>{movie.title}</p>
          <p>{movie.director}</p>
          <p>{movie.studio}</p>
          <p>{movie.releaseYear}</p>
          <p>{movie.movieCast.join(', ')}</p>
        </div>
      ))}
      {/* {data.getAllMoviesHandler.length > 0 && <UpdateMovie movie={data.getAllMoviesHandler[0]} />} */}
    </div>
  );

}

export default Movie
