import { useState } from "react";
import GameHUD from "../components/GameHUD";
import GameWorld from "../components/GameWorld";
import CodePanel from "../components/CodePanel";

function GamePage() {
  const [level, setLevel] = useState(1);

  const [commands, setCommands] = useState([]);

  const [player, setPlayer] = useState({
    row: 4,
    col: 0,
    direction: "up",
  });

  const [message, setMessage] = useState("");
  const [running, setRunning] = useState(false);

  const [campComplete, setCampComplete] = useState(false);
  const [bridgeComplete, setBridgeComplete] = useState(false);
  const [forestComplete, setForestComplete] = useState(false);
  const [dockComplete, setDockComplete] = useState(false);
  const [mountainComplete, setMountainComplete] =
    useState(false);

  const [finalComplete, setFinalComplete] =
    useState(false);

  const [supplies, setSupplies] = useState(0);

  const wait = (time) =>
    new Promise((resolve) => setTimeout(resolve, time));

  const addCommand = (command) => {
    if (running) return;

    if (commands.length >= 12) {
      setMessage("⚠️ Maximum 12 blocks allowed.");
      return;
    }

    setCommands((current) => [...current, command]);
    setMessage("");
  };

  const removeCommand = (index) => {
    if (running) return;

    setCommands((current) =>
      current.filter((_, i) => i !== index)
    );

    setMessage("");
  };

  const resetGame = () => {
    if (running) return;

    setCommands([]);
    setSupplies(0);
    setMessage("");

    if (level === 1) {
      setPlayer({
        row: 4,
        col: 0,
        direction: "up",
      });
    }

    if (level === 2) {
      setPlayer({
        row: 4,
        col: 0,
        direction: "up",
      });
    }

    if (level === 3) {
      setPlayer({
        row: 4,
        col: 2,
        direction: "up",
      });
    }

    if (level === 4) {
      setPlayer({
        row: 4,
        col: 2,
        direction: "up",
      });
    }

    if (level === 5) {
      setPlayer({
        row: 4,
        col: 0,
        direction: "up",
      });
    }

    if (level === 6) {
      setPlayer({
        row: 4,
        col: 0,
        direction: "up",
      });
    }
  };

  const nextLevel = () => {
    const next = level + 1;

    setLevel(next);
    setMessage("");
    setSupplies(0);

    if (next === 3) {
      setCommands([]);

      setPlayer({
        row: 4,
        col: 2,
        direction: "up",
      });

    } else if (next === 4) {
      setCommands([]);

      setPlayer({
        row: 4,
        col: 2,
        direction: "up",
      });

    } else if (next === 5) {

      setCommands([
        "MOVE",
        "MOVE",
        "TURN LEFT",
        "MOVE",
        "MOVE",
      ]);

      setPlayer({
        row: 4,
        col: 0,
        direction: "up",
      });

    } else if (next === 6) {

      setCommands([
        "SET ENERGY 0",
        "COLLECT ENERGY",
        "COLLECT ENERGY",
        "REPEAT 3",
        "CHARGE",
        "CHECK ENERGY",
        "IF",
        "ABORT",
      ]);

      setPlayer({
        row: 4,
        col: 0,
        direction: "up",
      });

    } else {

      setCommands([]);

      setPlayer({
        row: 4,
        col: 0,
        direction: "up",
      });

    }
  };

  /* ========================================
     AREA 01 — SEQUENCE
  ======================================== */

  const runCamp = async () => {
    let currentRow = 4;
    let currentCol = 0;
    let direction = "up";

    for (const command of commands) {
      await wait(450);

      if (command === "TURN RIGHT") {
        if (direction === "up") direction = "right";
        else if (direction === "right") direction = "down";
        else if (direction === "down") direction = "left";
        else direction = "up";
      }

      if (command === "TURN LEFT") {
        if (direction === "up") direction = "left";
        else if (direction === "left") direction = "down";
        else if (direction === "down") direction = "right";
        else direction = "up";
      }

      if (command === "MOVE") {
        if (direction === "up") currentRow--;
        if (direction === "down") currentRow++;
        if (direction === "left") currentCol--;
        if (direction === "right") currentCol++;
      }

      if (
        currentRow < 0 ||
        currentRow > 4 ||
        currentCol < 0 ||
        currentCol > 4
      ) {
        setPlayer({
          row: currentRow,
          col: currentCol,
          direction,
        });

        setMessage("💥 You walked off the island!");
        setRunning(false);
        return;
      }

      setPlayer({
        row: currentRow,
        col: currentCol,
        direction,
      });
    }

    await wait(400);

    if (currentRow === 1 && currentCol === 3) {
      setMessage("🎉 CAMP RESTORED! Perfect sequence!");
      setCampComplete(true);
    } else {
      setMessage("❌ Not quite! Try changing the order.");
    }

    setRunning(false);
  };

  /* ========================================
     AREA 02 — IF / ELSE
  ======================================== */

  const runBridge = async () => {
    const checkIndex = commands.indexOf("CHECK");
    const ifIndex = commands.indexOf("IF");
    const crossIndex = commands.indexOf("CROSS");
    const elseIndex = commands.indexOf("ELSE");
    const detourIndex = commands.indexOf("DETOUR");

    if (
      checkIndex === -1 ||
      checkIndex !== 0
    ) {
      setMessage(
        "❌ The explorer needs to inspect the bridge first."
      );

      setRunning(false);
      return;
    }

    setMessage("🧍 Walking toward the bridge...");
    await wait(500);

    setPlayer({
      row: 3,
      col: 0,
      direction: "up",
    });

    await wait(500);

    setPlayer({
      row: 2,
      col: 0,
      direction: "right",
    });

    await wait(500);

    setMessage("🔍 Inspecting the bridge...");
    await wait(1000);

    setMessage("⚠️ Bridge status: BROKEN");
    await wait(800);

    if (
      ifIndex === -1 ||
      ifIndex !== checkIndex + 1
    ) {
      setMessage(
        "❌ The IF condition must come after CHECK."
      );

      setRunning(false);
      return;
    }

    if (elseIndex === -1) {
      setMessage(
        "❌ The bridge is unsafe. You need an ELSE path."
      );

      setRunning(false);
      return;
    }

    if (crossIndex === -1) {
      setMessage(
        "❌ Your IF branch needs an action."
      );

      setRunning(false);
      return;
    }

    if (detourIndex === -1) {
      setMessage(
        "❌ Your ELSE branch needs an alternative."
      );

      setRunning(false);
      return;
    }

    if (crossIndex > elseIndex) {
      setMessage(
        "❌ CROSS must be inside the IF branch, before ELSE."
      );

      setRunning(false);
      return;
    }

    if (detourIndex < elseIndex) {
      setMessage(
        "❌ DETOUR must come after ELSE."
      );

      setRunning(false);
      return;
    }

    setMessage("🧠 IF bridge is safe → CROSS");
    await wait(900);

    setMessage("⚠️ Condition is FALSE!");
    await wait(800);

    setMessage("↪ ELSE branch activated!");
    await wait(900);

    setMessage("🛶 Taking the safe route...");
    await wait(700);

    setPlayer({
      row: 2,
      col: 1,
      direction: "left",
    });

    await wait(700);

    setPlayer({
      row: 1,
      col: 1,
      direction: "up",
    });

    await wait(700);

    setMessage("🛶 Safe route found!");
    await wait(700);

    setMessage(
      "🎉 BRIDGE SOLVED! You used IF / ELSE correctly!"
    );

    setBridgeComplete(true);
    setRunning(false);
  };

  /* ========================================
     AREA 03 — LOOPS
  ======================================== */

  const runForest = async () => {
    const repeatIndex = commands.indexOf("REPEAT 3");
    const moveIndex = commands.indexOf("MOVE");

    if (repeatIndex === -1) {
      setMessage(
        "❌ The forest path repeats. Try using a LOOP."
      );

      setRunning(false);
      return;
    }

    if (moveIndex === -1) {
      setMessage(
        "❌ Your loop needs an action to repeat."
      );

      setRunning(false);
      return;
    }

    if (moveIndex < repeatIndex) {
      setMessage(
        "❌ Put MOVE after the REPEAT block."
      );

      setRunning(false);
      return;
    }

    setMessage("🌲 Entering the forest...");
    await wait(800);

    setMessage(
      "🔁 LOOP STARTED — repeating MOVE 3 times"
    );

    await wait(700);

    let currentRow = 4;
    let currentCol = 2;

    for (let i = 0; i < 3; i++) {
      currentRow--;

      setPlayer({
        row: currentRow,
        col: currentCol,
        direction: "up",
      });

      await wait(650);
    }

    setMessage(
      "🌲 The repeated path is complete!"
    );

    await wait(700);

    if (currentRow === 1 && currentCol === 2) {
      setMessage(
        "🎉 FOREST CLEARED! You used a loop!"
      );

      setForestComplete(true);
      setRunning(false);
      return;
    }

    setMessage(
      "❌ The loop didn't take the correct path."
    );

    setRunning(false);
  };

  /* ========================================
     AREA 04 — VARIABLES
  ======================================== */

  const runDock = async () => {
    const setIndex = commands.indexOf("SET SUPPLIES 0");

    const collectIndexes = commands
      .map((command, index) =>
        command === "COLLECT" ? index : -1
      )
      .filter((index) => index !== -1);

    const checkIndex =
      commands.indexOf("CHECK SUPPLIES");

    const openIndex =
      commands.indexOf("OPEN GATE");

    if (
      setIndex === -1 ||
      setIndex !== 0
    ) {
      setMessage(
        "❌ Start by creating the supplies variable."
      );

      setRunning(false);
      return;
    }

    if (collectIndexes.length !== 3) {
      setMessage(
        "❌ You need to collect exactly 3 supplies."
      );

      setRunning(false);
      return;
    }

    if (
      checkIndex === -1 ||
      checkIndex < collectIndexes[2]
    ) {
      setMessage(
        "❌ Check the variable after collecting the supplies."
      );

      setRunning(false);
      return;
    }

    if (
      openIndex === -1 ||
      openIndex < checkIndex
    ) {
      setMessage(
        "❌ Use OPEN GATE after checking the supplies."
      );

      setRunning(false);
      return;
    }

    setSupplies(0);

    setMessage(
      "📦 supplies = 0 — variable created!"
    );

    await wait(900);

    let currentRow = 4;
    const currentCol = 2;

    for (let i = 1; i <= 3; i++) {
      currentRow--;

      setPlayer({
        row: currentRow,
        col: currentCol,
        direction: "up",
      });

      await wait(650);

      setSupplies(i);

      setMessage(
        `📦 COLLECTED! supplies = ${i}`
      );

      await wait(650);
    }

    setMessage(
      "🔎 CHECK SUPPLIES → supplies = 3"
    );

    await wait(900);

    setMessage(
      "🔓 Variable reached 3 — gate unlocked!"
    );

    await wait(900);

    setPlayer({
      row: 0,
      col: 2,
      direction: "up",
    });

    await wait(700);

    setMessage(
      "🎉 DOCK CLEARED! You used a variable!"
    );

    setDockComplete(true);
    setRunning(false);
  };

  /* ========================================
     AREA 05 — DEBUGGING
  ======================================== */

  const runMountain = async () => {
    setMessage("🏔️ Running the broken program...");
    await wait(800);

    setMessage("⚙️ Mountain elevator starting...");
    await wait(700);

    setPlayer({
      row: 3,
      col: 0,
      direction: "up",
    });

    await wait(650);

    setPlayer({
      row: 2,
      col: 0,
      direction: "up",
    });

    await wait(650);

    if (
      commands.length !== 5 ||
      commands[0] !== "MOVE" ||
      commands[1] !== "MOVE" ||
      commands[2] !== "TURN RIGHT" ||
      commands[3] !== "MOVE" ||
      commands[4] !== "MOVE"
    ) {
      setMessage(
        "🐛 BUG FOUND! The program is still broken."
      );

      await wait(500);

      setMessage(
        "💡 Hint: Check the direction change."
      );

      setRunning(false);
      return;
    }

    setMessage(
      "🔧 BUG FIXED! Re-running the program..."
    );

    await wait(800);

    setPlayer({
      row: 2,
      col: 1,
      direction: "right",
    });

    await wait(650);

    setPlayer({
      row: 2,
      col: 2,
      direction: "right",
    });

    await wait(650);

    setMessage(
      "⚙️ Elevator moving to the summit..."
    );

    await wait(700);

    setPlayer({
      row: 1,
      col: 2,
      direction: "up",
    });

    await wait(700);

    setPlayer({
      row: 0,
      col: 2,
      direction: "up",
    });

    await wait(700);

    setMessage(
      "🎉 MOUNTAIN CLEARED! You fixed the bug!"
    );

    setMountainComplete(true);
    setRunning(false);
  };

  /* ========================================
     AREA 06 — FINAL CHALLENGE
  ======================================== */

  const runFinal = async () => {
    const setIndex =
      commands.indexOf("SET ENERGY 0");

    const collectIndexes = commands
      .map((command, index) =>
        command === "COLLECT ENERGY"
          ? index
          : -1
      )
      .filter((index) => index !== -1);

    const repeatIndex =
      commands.indexOf("REPEAT 3");

    const chargeIndex =
      commands.indexOf("CHARGE");

    const checkIndex =
      commands.indexOf("CHECK ENERGY");

    const ifIndex =
      commands.indexOf("IF");

    const launchIndex =
      commands.indexOf("LAUNCH");

    const abortIndex =
      commands.indexOf("ABORT");

    if (
      setIndex === -1 ||
      setIndex !== 0
    ) {
      setMessage(
        "❌ Start by creating the energy variable."
      );

      setRunning(false);
      return;
    }

    setMessage(
      "⚡ energy = 0 — launch variable created!"
    );

    await wait(800);

    if (collectIndexes.length !== 2) {
      setMessage(
        "❌ The escape pod needs exactly 2 energy units."
      );

      setRunning(false);
      return;
    }

    for (let i = 0; i < 2; i++) {
      setPlayer({
        row: 3 - i,
        col: 0,
        direction: "up",
      });

      await wait(650);

      setMessage(
        `⚡ ENERGY COLLECTED — ${i + 1}/2`
      );

      await wait(600);
    }

    if (repeatIndex === -1) {
      setMessage(
        "❌ The engine must charge repeatedly. Use a LOOP."
      );

      setRunning(false);
      return;
    }

    if (
      chargeIndex === -1 ||
      chargeIndex < repeatIndex
    ) {
      setMessage(
        "❌ Put CHARGE inside the REPEAT block."
      );

      setRunning(false);
      return;
    }

    setMessage(
      "🔁 REPEAT 3 — charging escape engines..."
    );

    await wait(700);

    for (let i = 0; i < 3; i++) {
      setPlayer({
        row: 2,
        col: i + 1,
        direction: "right",
      });

      setMessage(
        `🚀 ENGINE CHARGE ${i + 1}/3`
      );

      await wait(600);
    }

    if (
      checkIndex === -1 ||
      checkIndex < chargeIndex
    ) {
      setMessage(
        "❌ Check the energy before launching."
      );

      setRunning(false);
      return;
    }

    setMessage(
      "🔎 CHECK ENERGY → energy level sufficient!"
    );

    await wait(900);

    if (
      ifIndex === -1 ||
      ifIndex < checkIndex
    ) {
      setMessage(
        "❌ Use IF after checking the energy."
      );

      setRunning(false);
      return;
    }

    if (abortIndex !== -1) {
      setMessage(
        "⚠️ IF condition detected an unsafe command."
      );

      await wait(800);

      setMessage(
        "🐛 DEBUG: Remove ABORT and add LAUNCH."
      );

      setRunning(false);
      return;
    }

    if (launchIndex === -1) {
      setMessage(
        "❌ The escape sequence needs LAUNCH."
      );

      setRunning(false);
      return;
    }

    if (launchIndex < ifIndex) {
      setMessage(
        "❌ LAUNCH must come after IF."
      );

      setRunning(false);
      return;
    }

    setMessage(
      "🧠 IF energy is sufficient → LAUNCH!"
    );

    await wait(900);

    setPlayer({
      row: 1,
      col: 4,
      direction: "right",
    });

    await wait(700);

    setPlayer({
      row: 0,
      col: 4,
      direction: "up",
    });

    await wait(900);

    setMessage(
      "🚀 ESCAPE POD ACTIVATED!"
    );

    await wait(1000);

    setMessage(
      "🎉 YOU ESCAPED CODE ISLAND!"
    );

    setFinalComplete(true);
    setRunning(false);
  };

  /* ========================================
     RUN PROGRAM
  ======================================== */

  const runCode = async () => {
    if (running) return;

    if (commands.length === 0) {
      setMessage("💡 Build your algorithm first!");
      return;
    }

    setRunning(true);
    setMessage("");

    if (level === 1) {
      await runCamp();
      return;
    }

    if (level === 2) {
      await runBridge();
      return;
    }

    if (level === 3) {
      await runForest();
      return;
    }

    if (level === 4) {
      await runDock();
      return;
    }

    if (level === 5) {
      await runMountain();
      return;
    }

    if (level === 6) {
      await runFinal();
      return;
    }
  };

  return (
    <div className="game-page">

      <GameHUD />

      <main className="game-main">

        <div className="challenge-title">

          <div>

            <span>
              {level === 1
                ? "🏕️ AREA 01"
                : level === 2
                ? "🌊 AREA 02"
                : level === 3
                ? "🌲 AREA 03"
                : level === 4
                ? "📦 AREA 04"
                : level === 5
                ? "🏔️ AREA 05"
                : "🚀 AREA 06"}
            </span>

            <h1>
              {level === 1
                ? "CAMP — THE FIRST PATH"
                : level === 2
                ? "BROKEN BRIDGE — MAKE A DECISION"
                : level === 3
                ? "LOOPING FOREST — FIND THE PATH"
                : level === 4
                ? "INVENTORY DOCK — COLLECT THE SUPPLIES"
                : level === 5
                ? "DEBUGGING MOUNTAIN — FIX THE BUG"
                : "ESCAPE POD — THE FINAL CHALLENGE"}
            </h1>

          </div>

          <div className="challenge-info">
            {level === 1
              ? "SEQUENCE"
              : level === 2
              ? "IF / ELSE"
              : level === 3
              ? "LOOPS"
              : level === 4
              ? "VARIABLES"
              : level === 5
              ? "DEBUGGING"
              : "FINAL CHALLENGE"}
          </div>

        </div>

        <GameWorld
          player={player}
          level={level}
          supplies={supplies}
        />

        <CodePanel
          commands={commands}
          addCommand={addCommand}
          removeCommand={removeCommand}
          runCode={runCode}
          resetGame={resetGame}
          running={running}
          message={message}
          level={level}
        />

        {/* AREA 01 COMPLETE */}

        {campComplete && level === 1 && (
          <div className="level-complete">
            <div className="complete-card">

              <div className="complete-icon">
                🏕️
              </div>

              <div className="complete-label">
                AREA 01 COMPLETE
              </div>

              <h2>CAMP RESTORED!</h2>

              <p>
                Great job! You learned how
                instructions run in sequence.
              </p>

              <div className="complete-score">
                ⭐ +100 POINTS
              </div>

              <button
                className="next-area-button"
                onClick={nextLevel}
              >
                NEXT AREA →
              </button>

            </div>
          </div>
        )}

        {/* AREA 02 COMPLETE */}

        {bridgeComplete && level === 2 && (
          <div className="level-complete">
            <div className="complete-card">

              <div className="complete-icon">
                🌊
              </div>

              <div className="complete-label">
                AREA 02 COMPLETE
              </div>

              <h2>BRIDGE SOLVED!</h2>

              <p>
                Great job! You learned how
                programs make decisions using
                IF / ELSE.
              </p>

              <div className="complete-score">
                ⭐ +150 POINTS
              </div>

              <button
                className="next-area-button"
                onClick={nextLevel}
              >
                NEXT AREA →
              </button>

            </div>
          </div>
        )}

        {/* AREA 03 COMPLETE */}

        {forestComplete && level === 3 && (
          <div className="level-complete">
            <div className="complete-card">

              <div className="complete-icon">
                🌲
              </div>

              <div className="complete-label">
                AREA 03 COMPLETE
              </div>

              <h2>FOREST CLEARED!</h2>

              <p>
                Great job! You learned how
                loops repeat instructions.
              </p>

              <div className="complete-score">
                ⭐ +200 POINTS
              </div>

              <button
                className="next-area-button"
                onClick={nextLevel}
              >
                NEXT AREA →
              </button>

            </div>
          </div>
        )}

        {/* AREA 04 COMPLETE */}

        {dockComplete && level === 4 && (
          <div className="level-complete">
            <div className="complete-card">

              <div className="complete-icon">
                📦
              </div>

              <div className="complete-label">
                AREA 04 COMPLETE
              </div>

              <h2>DOCK CLEARED!</h2>

              <p>
                Great job! You learned how
                variables store changing values.
              </p>

              <div className="complete-score">
                ⭐ +250 POINTS
              </div>

              <button
                className="next-area-button"
                onClick={nextLevel}
              >
                NEXT AREA →
              </button>

            </div>
          </div>
        )}

        {/* AREA 05 COMPLETE */}

        {mountainComplete && level === 5 && (
          <div className="level-complete">
            <div className="complete-card">

              <div className="complete-icon">
                🏔️
              </div>

              <div className="complete-label">
                AREA 05 COMPLETE
              </div>

              <h2>MOUNTAIN CLEARED!</h2>

              <p>
                Great job! You learned how
                debugging helps find and fix
                errors in a program.
              </p>

              <div className="complete-score">
                ⭐ +300 POINTS
              </div>

              <button
                className="next-area-button"
                onClick={nextLevel}
              >
                FINAL AREA →
              </button>

            </div>
          </div>
        )}

        {/* FINAL AREA COMPLETE */}

        {finalComplete && level === 6 && (
          <div className="level-complete final-complete">

            <div className="complete-card final-card">

              <div className="complete-icon">
                🚀
              </div>

              <div className="complete-label">
                FINAL AREA COMPLETE
              </div>

              <h2>YOU ESCAPED!</h2>

              <p>
                You solved the island challenges
                using sequence, decisions, loops,
                variables, and debugging.
              </p>

              <div className="final-mission-list">

                <div>
                  🏕️ Sequence
                  <strong>✓</strong>
                </div>

                <div>
                  🌊 IF / ELSE
                  <strong>✓</strong>
                </div>

                <div>
                  🌲 Loops
                  <strong>✓</strong>
                </div>

                <div>
                  📦 Variables
                  <strong>✓</strong>
                </div>

                <div>
                  🏔️ Debugging
                  <strong>✓</strong>
                </div>

              </div>

              <div className="complete-score">
                ⭐ +500 POINTS
              </div>

              <button
                className="next-area-button"
                onClick={() => {
                  setMessage(
                    "🏆 CODE ISLAND MASTER — MISSION COMPLETE!"
                  );
                }}
              >
                🏆 MISSION COMPLETE
              </button>

            </div>

          </div>
        )}

      </main>
    </div>
  );
}

export default GamePage;