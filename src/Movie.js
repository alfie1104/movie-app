import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import LineEllipsis from "react-lines-ellipsis";

function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LineEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis=" ..."
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
};

function MoviePoster({ poster, alt }) {
    return (
        <img src={poster} alt={alt} className="Movie__Poster" />
    );
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
};


function MovieGenre({ genre }) {
    return (
        <span className="Movie__Genre">{genre} </span>
    );
}
MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
};


export default Movie;