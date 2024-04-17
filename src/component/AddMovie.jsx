import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'


const ADD_MOVIE = gql`

        mutation($movieInput: MovieInput){
        addMovieHandler(movieInput: $movieInput){
            id
            title
            director
            studio
            releaseYear
            movieCast
        }
    }
    
`

function AddMovie() {

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [studio, setStudio] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [movieCast, setMovieCast] = useState('')

    const [addMovieHandler, { loading, error }] = useMutation(ADD_MOVIE);

    const handleAddMovie = (e) => {
        e.preventDefault()

        addMovieHandler({ variables: { movieInput: { title, director, studio, releaseYear: parseInt(releaseYear), movieCast: movieCast.split(',') } } });

        console.log("Movie added successfully")
    }

    return (
        <div>
            <h1>Add Movie</h1>

            <form onSubmit={handleAddMovie}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />
                <input type="text" placeholder="Studio" value={studio} onChange={(e) => setStudio(e.target.value)} required />
                <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
                <input type="text" placeholder="Movie Cast (comma-separated)" value={movieCast} onChange={(e) => setMovieCast(e.target.value)} required />
                <button type="submit">Add Movie</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error occurred: {error.message}</p>}
        </div>
    )
}

export default AddMovie
