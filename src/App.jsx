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
      const root = document.documentElement;

      const applyTelegramTheme = () => {
        const theme = tg.themeParams || {};

        root.style.setProperty('--tg-bg-color', theme.bg_color || '#17212b');
        root.style.setProperty('--tg-secondary-bg-color', theme.secondary_bg_color || '#1f2a36');
        root.style.setProperty('--tg-text-color', theme.text_color || '#ffffff');
        root.style.setProperty('--tg-hint-color', theme.hint_color || '#9aa6b2');
        root.style.setProperty('--tg-link-color', theme.link_color || '#6ab2f2');
        root.style.setProperty('--tg-button-color', theme.button_color || '#2aabee');
        root.style.setProperty('--tg-button-text-color', theme.button_text_color || '#ffffff');

        root.style.setProperty('--app-bg-start', theme.secondary_bg_color || '#0f2027');
        root.style.setProperty('--app-bg-mid', theme.bg_color || '#203a43');
        root.style.setProperty('--app-bg-end', theme.bg_color || '#2c5364');
        root.style.setProperty('--app-text-color', theme.text_color || '#ffffff');
        root.style.setProperty('--app-muted-color', theme.hint_color || 'rgba(255,255,255,0.85)');
        root.style.setProperty('--app-accent-color', theme.link_color || theme.button_color || '#1a73e8');
        root.style.setProperty('--app-button-color', theme.button_color || '#2aabee');
        root.style.setProperty('--app-button-text-color', theme.button_text_color || '#ffffff');
        root.style.setProperty('--app-surface-bg', theme.secondary_bg_color || '#1f2a36');
        root.style.setProperty('--app-surface-weak', 'rgba(255, 255, 255, 0.1)');
        root.style.setProperty('--app-surface-border', 'rgba(255, 255, 255, 0.25)');
        root.style.setProperty('--app-overlay', 'rgba(0, 0, 0, 0.75)');
        root.style.colorScheme = tg.colorScheme === 'light' ? 'light' : 'dark';
      };

      tg.expand();
      tg.ready();

      applyTelegramTheme();
      tg.onEvent?.('themeChanged', applyTelegramTheme);

      return () => {
        tg.offEvent?.('themeChanged', applyTelegramTheme);
      };
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