function GameHUD({ score = 0, lives = 3, level = 1 }) {
  return (
    <header className="game-hud">

      <button className="menu-button">
        ☰
      </button>

      <div className="game-title">
        CODE <span>ISLAND</span>
      </div>

      <div className="hud-stats">

        <div className="stat">
          ⭐
          <strong>
            {String(score).padStart(3, "0")}
          </strong>
        </div>

        <div className="stat">
          ❤️ {lives}
        </div>

        <div className="stat">
          <strong>{level}</strong>
          <span>/ 6</span>
        </div>

      </div>

    </header>
  );
}

export default GameHUD;