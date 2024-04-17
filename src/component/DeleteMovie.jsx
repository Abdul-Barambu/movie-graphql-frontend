import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'


const DELETE_MOVIE = gql`
    mutation($id: Int){
        deleteMovieHandler(id: $id)
        
    }
`


function DeleteMovie() {

    const [id, setId] = useState('');

    const [deleteMovieHandler, { loading, error}] = useMutation(DELETE_MOVIE);

    const handleDeleteMovie = (e) => {
        e.preventDefault()

        deleteMovieHandler({ variables:  {id: parseInt(id)}  })
        console.log('deleted succesfully')
    }


    return (
        <div>
            <form onSubmit={handleDeleteMovie}>
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
                <button>Delete</button>
            </form>
        </div>
    )
}

export default DeleteMovie
