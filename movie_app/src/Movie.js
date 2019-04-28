import React from 'react';
import './Movie.css';


const Movie = ({title, poster, genres, summary}) => {
    return(
        <div>
            <h1>{title}</h1>
            <MoviePoster poster={poster} alt={title} />
            <div>
                {genres.map((genre, index)=> <Genres key={index} genre={genre} />)}
            </div>
            <p>{summary}</p>
        </div>
    );
}

const Genres = ({genre}) => {
    return(<span>{genre} </span>);
}


const MoviePoster = ({ poster, title }) => {
    return (
        <div>
            <img src={poster} alt={title} />
        </div>
    );
}


export default Movie;