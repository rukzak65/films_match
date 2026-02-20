import React from 'react';

export default function GenreSelector({ onSelect }) {
    const genres = [
        "Фантастика",
        "Хоррор",
        "Драма",
        "Комедия",
        "Боевик",
        "Мелодрама",
        "Детектив",
        "Триллер",
        "Фэнтези",
        "Приключения",
        "Аниме",
        "Биография"
    ];

    return (
        <div style={{
            width: '100%',
            maxWidth: '600px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px',
            padding: '20px 0'
        }}>
            {genres.map((genre) => (
                <button
                    key={genre}
                    onClick={() => onSelect(genre)}
                    style={{
                        padding: '16px 24px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        textShadow: '0 1px 3px rgba(0,0,0,0.5)'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.background = 'rgba(26, 115, 232, 0.6)';
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(26, 115, 232, 0.4)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                    }}
                >
                    {genre}
                </button>
            ))}
        </div>
    );
}