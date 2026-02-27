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
    const normalize = (s) => (s || '').toLowerCase();
    const sg = normalize(genre);
    const filtered = movies.filter((m) => {
      const mg = normalize(m.genre);
      return mg && sg && (mg.includes(sg) || sg.includes(mg));
    });
    setFilteredMovies(filtered.sort(() => Math.random() - 0.5));
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
    <div className="app-screen app-safe-area">
      <h1 className="app-title">КиноМатч</h1>
      <p className="app-subtitle">
        Выберите жанр и найдите фильм для двоих 🍿
      </p>

      {!selectedGenre ? (
        <div className="app-page-container">
          <h2 className="app-section-title">Выберите жанр</h2>
          <GenreSelector 
            onSelect={handleSelectGenre} 
          />
        </div>
      ) : !filteredMovies[index] ? (
        <div className="app-empty-state">
          <h2 className="app-empty-title">
            Фильмы закончились 😅
          </h2>
          <button
            onClick={() => setSelectedGenre(null)}
            className="app-primary-btn min-touch-target"
          >
            Вернуться к выбору жанра
          </button>
        </div>
      ) : (
        <div className="app-page-container">
          <button
            onClick={backToGenres}
            className="app-ghost-btn min-touch-target"
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
        <div className="match-modal-overlay app-safe-area">
          <div className="match-modal-dialog">
            <h2 className="match-modal-title">
              Вы выбрали нужный вам фильм!
            </h2>
            <p className="match-modal-text">
              Желаете продолжить просмотр или выйти в главное меню?
            </p>

            <div className="match-modal-actions">
              <button
                onClick={nextMovie}
                className="match-modal-btn match-modal-btn--continue min-touch-target"
              >
                Продолжить
              </button>

              <button
                onClick={backToGenres}
                className="match-modal-btn match-modal-btn--menu min-touch-target"
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