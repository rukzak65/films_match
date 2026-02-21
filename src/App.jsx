import { useState, useEffect } from "react";
import { movies } from "./data/movie.js";
import GenreSelector from "./components/GenreSelector";
import MovieCard from "./components/MovieCard";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [showMatchModal, setShowMatchModal] = useState(false);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
      tg.ready();
    }
  }, []);

  const handleSelectGenre = (genre) => {
    const filtered = movies.filter((m) => m.genre === genre);
    setFilteredMovies(filtered);
    setSelectedGenre(genre);
    setIndex(0);
  };

  const handleLike = () => {
    setShowMatchModal(true);
  };

  const nextMovie = () => {
    setIndex((prev) => prev + 1);
    setShowMatchModal(false);
  };

  const backToGenres = () => {
    setSelectedGenre(null);
    setFilteredMovies([]);
    setIndex(0);
    setShowMatchModal(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1 style={{ margin: "0 0 20px", fontSize: "3rem" }}>КиноМатч</h1>
      <p style={{ marginBottom: "40px", opacity: 0.9 }}>
        Выберите жанр и найдите фильм для двоих 🍿
      </p>

      {!selectedGenre ? (
        <div style={{ width: "100%", maxWidth: "420px" }}>
          <GenreSelector 
            onSelect={handleSelectGenre} 
            onBack={backToGenres} 
          />
        </div>
      ) : !filteredMovies[index] ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
            Фильмы закончились 😅
          </h2>
          <button
            onClick={() => setSelectedGenre(null)}
            style={{
              padding: "16px 40px",
              fontSize: "1.4rem",
              background: "#e74c3c",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(231,76,60,0.4)"
            }}
          >
            Вернуться к выбору жанра
          </button>
        </div>
      ) : (
        <div style={{ width: "100%", maxWidth: "420px" }}>
          <button
            onClick={backToGenres}
            style={{
              marginBottom: '20px',
              padding: '12px 24px',
              fontSize: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#ffffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(8px)'
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
            ← К выбору жанра
          </button>

          <MovieCard
            movie={filteredMovies[index]}
            onLike={handleLike}
            onDislike={nextMovie}
          />
        </div>
      )}

      {showMatchModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            backdropFilter: "blur(4px)"
          }}
        >
          <div
            style={{
              background: "white",
              color: "#333",
              padding: "40px 30px",
              borderRadius: "16px",
              maxWidth: "420px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              animation: "fadeIn 0.3s ease-out"
            }}
          >
            <h2 style={{ marginBottom: "24px", fontSize: "1.8rem", color: "#1a73e8" }}>
              Вы выбрали нужный вам фильм!
            </h2>
            <p style={{ marginBottom: "32px", fontSize: "1.2rem" }}>
              Желаете продолжить просмотр или выйти в главное меню?
            </p>

            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
              <button
                onClick={nextMovie}
                style={{
                  padding: "14px 36px",
                  fontSize: "1.1rem",
                  background: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(76,175,80,0.3)"
                }}
              >
                Продолжить
              </button>

              <button
                onClick={backToGenres}
                style={{
                  padding: "14px 36px",
                  fontSize: "1.1rem",
                  background: "#757575",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(117,117,117,0.3)"
                }}
              >
                В главное меню
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;