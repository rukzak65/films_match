import React from 'react';

export default function MovieCard({ movie, onLike, onDislike }) {
    if (!movie) return <h2>Фильмы закончились 😅</h2>;

    return (
        <div className="movie-card">
            <h2 className="movie-card-title">
                {movie.title}

                <br></br>
                {movie.rating}
            </h2>
            

            <p className="movie-card-description">
                {movie.description}
            </p>

            <div className="movie-card-actions">
                <button
                    onClick={onDislike}
                    className="movie-action-btn movie-action-btn--dislike min-touch-target"
                    aria-label="Следующий фильм"
                >
                    👎
                </button>

                <button
                    onClick={onLike}
                    className="movie-action-btn movie-action-btn--like min-touch-target"
                    aria-label="Лайк"
                >
                    👍
                </button>
            </div>
        </div>
    );
}