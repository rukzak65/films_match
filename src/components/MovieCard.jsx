import { useState, useEffect } from 'react';

export default function MovieCard({ movie, onLike, onDislike }) {
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        setImgError(false);
        setImgLoaded(false);
    }, [movie?.id]);

    if (!movie) return <h2>Фильмы закончились 😅</h2>;

    return (
        <div className="movie-card">
            {movie.poster && !imgError ? (
                <div className="movie-card-poster">
                    {!imgLoaded && (
                        <div className="movie-card-poster movie-card-poster--fallback">⏳</div>
                    )}
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="movie-card-poster-img"
                        style={{ display: imgLoaded ? 'block' : 'none' }}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                    />
                </div>
            ) : (
                <div className="movie-card-poster movie-card-poster--fallback">
                    🎬
                </div>
            )}

            <h2 className="movie-card-title">
                {movie.title}
                <span className="movie-card-rating">⭐ {movie.rating}</span>
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