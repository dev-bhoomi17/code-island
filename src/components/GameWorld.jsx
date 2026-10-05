function GameWorld({ player, level, supplies }) {
  const tiles = Array.from({ length: 25 });

  const playerPosition = {
    left: `${player.col * 20 + 10}%`,
    top: `${player.row * 20 + 10}%`,
  };

  const playerRotation = {
    up: "rotateZ(45deg) rotateX(-55deg)",
    right: "rotateZ(135deg) rotateX(-55deg)",
    down: "rotateZ(225deg) rotateX(-55deg)",
    left: "rotateZ(315deg) rotateX(-55deg)",
  };

  /* ========================================
     AREA 06 — ESCAPE POD — FINAL CHALLENGE
  ======================================== */

  if (level === 6) {
    return (
      <div className="game-world final-world">

        <div className="final-sky">

          <div className="final-sun">
            ☀️
          </div>

          <div className="final-cloud final-cloud-1">
            ☁️
          </div>

          <div className="final-cloud final-cloud-2">
            ☁️
          </div>

          <div className="final-area-name">
            🚀 ESCAPE POD — FINAL CHALLENGE
          </div>

        </div>

        <div className="final-map">

          <div className="final-water">

            <div className="final-water-line final-water-line-1" />
            <div className="final-water-line final-water-line-2" />
            <div className="final-water-line final-water-line-3" />
            <div className="final-water-line final-water-line-4" />

          </div>

          <div className="final-island">

            <div className="final-tile final-tile-1" />
            <div className="final-tile final-tile-2" />
            <div className="final-tile final-tile-3" />
            <div className="final-tile final-tile-4" />
            <div className="final-tile final-tile-5" />

            <div className="final-tile final-tile-6" />
            <div className="final-tile final-tile-7" />
            <div className="final-tile final-tile-8" />

            <div className="final-tree final-tree-1">
              🌴
            </div>

            <div className="final-tree final-tree-2">
              🌴
            </div>

            <div className="final-rock final-rock-1">
              🪨
            </div>

            <div className="final-rock final-rock-2">
              🪨
            </div>

            <div className="energy-crystal crystal-1">
              💎
            </div>

            <div className="energy-crystal crystal-2">
              💎
            </div>

            <div className="energy-crystal crystal-3">
              💎
            </div>

            {/* ENERGY STATION */}

            <div className="energy-station">

              <div className="station-screen">
                ⚡
              </div>

              <div className="station-data">
                ENERGY
              </div>

              <div className="station-status">
                SYSTEM ONLINE
              </div>

            </div>

            {/* ESCAPE POD */}

            <div className="escape-pod">

              <div className="pod-glow" />

              <div className="pod-window">
                ✦
              </div>

              <div className="pod-body">
                🚀
              </div>

              <div className="pod-label">
                ESCAPE POD
              </div>

            </div>

            {/* LAUNCH PLATFORM */}

            <div className="launch-pad">

              <div className="launch-ring launch-ring-outer" />
              <div className="launch-ring launch-ring-middle" />
              <div className="launch-ring launch-ring-inner" />

              <div className="launch-arrow">
                ↑
              </div>

              <div className="launch-text">
                LAUNCH
              </div>

            </div>

            {/* SYSTEM TERMINAL */}

            <div className="final-terminal">

              <div className="terminal-top">

                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot" />

                <span className="terminal-title">
                  SYSTEM CORE
                </span>

              </div>

              <div className="terminal-body">

                <div>
                  SYSTEM:
                  <strong> LOCKED</strong>
                </div>

                <div>
                  ENERGY:
                  <strong> REQUIRED</strong>
                </div>

                <div>
                  ENGINE:
                  <strong> OFFLINE</strong>
                </div>

                <div className="terminal-warning">
                  ⚠ COMPLETE CODE
                </div>

              </div>

            </div>

            {/* FINAL MISSION SIGN */}

            <div className="final-sign">

              <div className="final-sign-icon">
                🚀
              </div>

              <strong>
                FINAL MISSION
              </strong>

              <small>
                RESTORE • CHARGE • ESCAPE
              </small>

            </div>

            {/* PLAYER */}

            <div
              className="final-player"
              style={{
                left: playerPosition.left,
                top: playerPosition.top,
                transform:
                  playerRotation[player.direction],
              }}
            >
              🧑‍🚀
            </div>

          </div>

        </div>

        <div className="final-objective">

          <span>
            FINAL MISSION
          </span>

          Restore the escape system,
          charge the engines and leave Code Island.

        </div>

      </div>
    );
  }

  /* ========================================
     AREA 02 — RIVER CANYON
  ======================================== */

  if (level === 2) {
    return (
      <div className="game-world river-world">

        <div className="river-sky">

          <div className="river-sun">
            ☀️
          </div>

          <div className="river-cloud river-cloud-1">
            ☁️
          </div>

          <div className="river-cloud river-cloud-2">
            ☁️
          </div>

          <div className="area-name">
            🌊 RIVER CANYON
          </div>

        </div>

        <div className="river-map">

          <div className="river-water">
            <div className="water-line line-1" />
            <div className="water-line line-2" />
            <div className="water-line line-3" />
            <div className="water-line line-4" />
          </div>

          <div className="river-land river-left" />
          <div className="river-land river-right" />

          <div className="cliff cliff-1">🪨</div>
          <div className="cliff cliff-2">🪨</div>
          <div className="cliff cliff-3">🪨</div>

          <div className="broken-bridge">

            <div className="bridge-piece bridge-piece-1">
              🪵
            </div>

            <div className="bridge-piece bridge-piece-2">
              🪵
            </div>

            <div className="broken-sign">
              ⚠️
            </div>

          </div>

          <div className="detour-boat">
            🛶
          </div>

          <div className="detour-label">
            SAFE ROUTE
          </div>

          <div
            className="river-player"
            style={{
              left: playerPosition.left,
              top: playerPosition.top,
              transform:
                playerRotation[player.direction],
            }}
          >
            🧍
          </div>

        </div>

      </div>
    );
  }

  /* ========================================
     AREA 03 — LOOPING FOREST
  ======================================== */

  if (level === 3) {
    return (
      <div className="game-world forest-world">

        <div className="forest-sky">

          <div className="forest-sun">
            ☀️
          </div>

          <div className="forest-cloud forest-cloud-1">
            ☁️
          </div>

          <div className="forest-cloud forest-cloud-2">
            ☁️
          </div>

          <div className="forest-area-name">
            🌲 LOOPING FOREST
          </div>

        </div>

        <div className="forest-map">

          <div className="forest-ground">

            <div className="forest-path">
              <div className="path-tile path-1" />
              <div className="path-tile path-2" />
              <div className="path-tile path-3" />
              <div className="path-tile path-4" />
            </div>

          </div>

          <div className="forest-tree tree-a">🌲</div>
          <div className="forest-tree tree-b">🌲</div>
          <div className="forest-tree tree-c">🌲</div>
          <div className="forest-tree tree-d">🌲</div>

          <div className="forest-tree tree-e">🌲</div>
          <div className="forest-tree tree-f">🌲</div>
          <div className="forest-tree tree-g">🌲</div>
          <div className="forest-tree tree-h">🌲</div>

          <div className="forest-rock forest-rock-1">
            🪨
          </div>

          <div className="forest-rock forest-rock-2">
            🪨
          </div>

          <div className="forest-mushroom mushroom-1">
            🍄
          </div>

          <div className="forest-mushroom mushroom-2">
            🍄
          </div>

          <div className="forest-log">
            🪵
          </div>

          <div className="loop-marker">

            <div className="loop-symbol">
              ↻
            </div>

            <div className="loop-marker-label">
              REPEAT PATH
            </div>

          </div>

          <div className="forest-exit">

            <div className="exit-flag">
              🏁
            </div>

            <div className="exit-label">
              FOREST EXIT
            </div>

          </div>

          <div
            className="forest-player"
            style={{
              left: playerPosition.left,
              top: playerPosition.top,
              transform:
                playerRotation[player.direction],
            }}
          >
            🧍
          </div>

        </div>

      </div>
    );
  }

  /* ========================================
     AREA 04 — INVENTORY DOCK
  ======================================== */

  if (level === 4) {
    return (
      <div className="game-world dock-world">

        <div className="dock-sky">

          <div className="dock-sun">
            ☀️
          </div>

          <div className="dock-cloud dock-cloud-1">
            ☁️
          </div>

          <div className="dock-cloud dock-cloud-2">
            ☁️
          </div>

          <div className="dock-area-name">
            📦 INVENTORY DOCK
          </div>

        </div>

        <div className="dock-map">

          <div className="dock-platform">

            <div className="dock-floor" />

            <div className="dock-water dock-water-left" />
            <div className="dock-water dock-water-right" />

            <div className="dock-crate crate-a">
              📦
            </div>

            <div className="dock-crate crate-b">
              📦
            </div>

            <div className="dock-crate crate-c">
              📦
            </div>

            <div className="dock-crate crate-d">
              📦
            </div>

            <div className="supply-counter">

              <div className="counter-title">
                SUPPLIES
              </div>

              <div className="counter-value">
                {supplies}
              </div>

              <div className="counter-goal">
                / 3
              </div>

            </div>

            <div className="variable-sign">
              <span>VARIABLE</span>
              <strong>supplies</strong>
            </div>

            <div className="dock-gate">

              <div className="gate-icon">
                🔒
              </div>

              <div className="gate-label">
                SUPPLY GATE
              </div>

            </div>

            <div className="dock-arrow">
              ↑
            </div>

            <div
              className="dock-player"
              style={{
                left: playerPosition.left,
                top: playerPosition.top,
                transform:
                  playerRotation[player.direction],
              }}
            >
              🧍
            </div>

          </div>

        </div>

      </div>
    );
  }

  /* ========================================
     AREA 05 — DEBUGGING MOUNTAIN
  ======================================== */

  if (level === 5) {
    return (
      <div className="game-world mountain-world">

        <div className="mountain-sky">

          <div className="mountain-sun">
            ☀️
          </div>

          <div className="mountain-cloud mountain-cloud-1">
            ☁️
          </div>

          <div className="mountain-cloud mountain-cloud-2">
            ☁️
          </div>

          <div className="mountain-area-name">
            🏔️ DEBUGGING MOUNTAIN
          </div>

        </div>

        <div className="mountain-map">

          <div className="mountain-ground">

            <div className="mountain-peak peak-back">
              🏔️
            </div>

            <div className="mountain-peak peak-main">
              ⛰️
            </div>

            <div className="mountain-rock rock-m1">
              🪨
            </div>

            <div className="mountain-rock rock-m2">
              🪨
            </div>

            <div className="mountain-rock rock-m3">
              🪨
            </div>

            <div className="mountain-path">

              <div className="mountain-path-tile mp-1" />
              <div className="mountain-path-tile mp-2" />
              <div className="mountain-path-tile mp-3" />
              <div className="mountain-path-tile mp-4" />
              <div className="mountain-path-tile mp-5" />

            </div>

            <div className="debug-terminal">

              <div className="terminal-screen">
                <span>CODE ERROR</span>
                <strong>🐛 BUG DETECTED</strong>
              </div>

              <div className="terminal-light" />

            </div>

            <div className="elevator">

              <div className="elevator-door">
                🚠
              </div>

              <div className="elevator-label">
                MOUNTAIN LIFT
              </div>

            </div>

            <div className="bug-sign">
              🐛
              <span>FIX THE CODE</span>
            </div>

            <div
              className="mountain-player"
              style={{
                left: playerPosition.left,
                top: playerPosition.top,
                transform:
                  playerRotation[player.direction],
              }}
            >
              🧍
            </div>

            <div className="summit-flag">
              🏁
            </div>

            <div className="summit-label">
              SUMMIT
            </div>

          </div>

        </div>

      </div>
    );
  }

  /* ========================================
     AREA 01 — CAMP
  ======================================== */

  return (
    <div className="game-world">

      <div className="world-sky">

        <div className="cloud cloud-1">
          ☁
        </div>

        <div className="cloud cloud-2">
          ☁
        </div>

        <div className="sun">
          ☀
        </div>

      </div>

      <div className="island">

        {tiles.map((_, index) => (
          <div
            key={index}
            className={`island-tile tile-${index}`}
          />
        ))}

        <div className="tree tree-1">
          🌴
        </div>

        <div className="tree tree-2">
          🌴
        </div>

        <div className="rock rock-1">
          🪨
        </div>

        <div className="rock rock-2">
          🪨
        </div>

        <div className="camp-simple">

          <div className="camp-tent">
            ⛺
          </div>

          <div className="camp-label">
            CAMP
          </div>

        </div>

        <div
          className="player"
          style={{
            left: playerPosition.left,
            top: playerPosition.top,
            transform:
              playerRotation[player.direction],
          }}
        >
          🧍
        </div>

        <div className="goal">
          🏁
        </div>

      </div>

    </div>
  );
}

export default GameWorld;