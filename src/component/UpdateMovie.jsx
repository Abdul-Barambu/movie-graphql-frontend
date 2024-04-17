import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'


const UPDATE_MOVIE = gql`
    mutation($id: Int, $movieInput: MovieInput){
        updateMovieHandler(id: $id, movieInput: $movieInput){
            id
            title
            director
            studio
            releaseYear
            movieCast
        }
    }
`

function UpdateMovie() {

    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [studio, setStudio] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [movieCast, setMovieCast] = useState('')

    const [updateMovieHandler, { loading, error }] = useMutation(UPDATE_MOVIE)

    const handleUpdateMovie = (e) => {
        e.preventDefault();

        updateMovieHandler({ variables: { id, movieInput: { title, director, studio, releaseYear: parseInt(releaseYear), movieCast: movieCast.split(',') } } });

        console.log("Movie updated successfully")
    }

    return (
        <div>
            <h1>Update Movie</h1>
            <form onSubmit={handleUpdateMovie}>
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />
                <input type="text" placeholder="Studio" value={studio} onChange={(e) => setStudio(e.target.value)} required />
                <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
                <input type="text" placeholder="Movie Cast (comma-separated)" value={movieCast} onChange={(e) => setMovieCast(e.target.value)} required />
                <button type="submit">Update Movie</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error occurred: {error.message}</p>}
        </div>
    )
}

export default UpdateMovie
