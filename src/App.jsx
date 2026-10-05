import { useState } from "react";
import GamePage from "./pages/GamePage";
import "./App.css";

function App() {

  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="start-screen">

        <div className="start-card">

          <div className="start-island">
            🏝️
          </div>

          <p className="mini-title">
            ADVENTURE • LOGIC • CODING
          </p>

          <h1>
            CODE <span>ISLAND</span>
          </h1>

          <p>
            The island is broken.
            <br />
            Code your way out.
          </p>

          <button
            className="start-game-button"
            onClick={() => setStarted(true)}
          >
            START GAME →
          </button>

        </div>

      </div>
    );
  }

  return <GamePage />;
}

export default App;