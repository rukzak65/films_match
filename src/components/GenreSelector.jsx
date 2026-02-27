import React from 'react';

export default function GenreSelector({ onSelect }) {
    const genres = [
        "Фантастика 🚀",
        "Хоррор 👻",
        "Драма 🎭",
        "Комедия 😂",
        "Боевик 💥",
        "Мелодрама 💖",
        "Детектив 🕵️‍♂️",
        "Триллер 😬",
        "Фэнтези 🧙‍♂️",
        "Приключения 🧭",
        "Аниме 🎌",
        "Биография 👤"
    ];

    return (
        <div className="genre-selector">
            <div className="genre-grid">
                {genres.map((genre) => (
                    <button
                        key={genre}
                        onClick={() => onSelect(genre)}
                        className="genre-btn min-touch-target"
                    >
                        {genre}
                    </button>
                ))}
            </div>
        </div>
    );
}