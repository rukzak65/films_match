import React from 'react';

export default function MovieCard({ movie, onLike, onDislike }) {
    if (!movie) return <h2>Фильмы закончились 😅</h2>;

    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '30px 25px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            maxWidth: '420px',
            width: '100%',
            textAlign: 'center'
        }}>
            <h2 style={{
                margin: '0 0 16px',
                fontSize: '2.2rem',
                fontWeight: 'bold',
                textShadow: '0 2px 8px rgba(0,0,0,0.6)'
            }}>
                {movie.title}
            </h2>

            <p style={{
                margin: '0 0 40px',
                fontSize: '1.2rem',
                opacity: 0.9,
                lineHeight: '1.5'
            }}>
                {movie.description}
            </p>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '100px',
                marginTop: '30px'
            }}>
                <button
                    onClick={onDislike}
                    style={{
                        width: '100px',
                        height: '100px',
                        fontSize: '3.5rem',
                        background: 'linear-gradient(135deg, #ff5252, #d32f2f)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        boxShadow: '0 8px 30px rgba(244, 67, 54, 0.5)',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.12)';
                        e.target.style.boxShadow = '0 12px 40px rgba(244, 67, 54, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 8px 30px rgba(244, 67, 54, 0.5)';
                    }}
                >
                    👎
                </button>

                <button
                    onClick={onLike}
                    style={{
                        width: '100px',
                        height: '100px',
                        fontSize: '3.5rem',
                        background: 'linear-gradient(135deg, #4caf50, #388e3c)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        boxShadow: '0 8px 30px rgba(76, 175, 80, 0.5)',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.12)';
                        e.target.style.boxShadow = '0 12px 40px rgba(76, 175, 80, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 8px 30px rgba(76, 175, 80, 0.5)';
                    }}
                >
                    👍
                </button>
            </div>
        </div>
    );
}