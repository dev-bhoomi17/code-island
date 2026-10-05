function CodePanel({
  commands,
  addCommand,
  removeCommand,
  runCode,
  resetGame,
  running,
  message,
  level,
}) {
  const isBridge = level === 2;
  const isForest = level === 3;
  const isDock = level === 4;
  const isMountain = level === 5;
  const isFinal = level === 6;

  return (
    <div className={`code-panel ${isFinal ? "final-code-panel" : ""}`}>

      <div className="code-header">

        <div>

          <span className="code-label">
            {isFinal
              ? "🚀 FINAL CODE LAB"
              : isMountain
              ? "🐛 DEBUG LAB"
              : isDock
              ? "📦 VARIABLE LAB"
              : isForest
              ? "🔁 LOOP LAB"
              : isBridge
              ? "🧠 DECISION LAB"
              : "🧠 YOUR ALGORITHM"}
          </span>

          <h2>
            {isFinal
              ? "Activate the escape pod"
              : isMountain
              ? "Find and fix the broken instruction"
              : isDock
              ? "Manage the supply variable"
              : isForest
              ? "Build a repeating path"
              : isBridge
              ? "Build the bridge decision"
              : "Guide the explorer to the camp"}
          </h2>

        </div>

        <div className="code-actions">

          <button
            className="reset-button"
            onClick={resetGame}
            disabled={running}
          >
            ↻ RESET
          </button>

          <button
            className="run-button"
            onClick={runCode}
            disabled={running}
          >
            {running
              ? "⏳ RUNNING..."
              : "▶ RUN"}
          </button>

        </div>

      </div>

      <div className="block-toolbox">

        <span className="toolbox-label">
          {isFinal
            ? "FINAL SYSTEM BLOCKS"
            : isMountain
            ? "DEBUGGING TOOLS"
            : "AVAILABLE BLOCKS"}
        </span>

        {/* =================================
            AREA 01 — SEQUENCE
        ================================= */}

        {!isBridge &&
          !isForest &&
          !isDock &&
          !isMountain &&
          !isFinal && (
            <>
              <button
                className="tool-block move-block"
                onClick={() => addCommand("MOVE")}
                disabled={running}
              >
                MOVE
              </button>

              <button
                className="tool-block turn-block"
                onClick={() => addCommand("TURN RIGHT")}
                disabled={running}
              >
                TURN RIGHT
              </button>

              <button
                className="tool-block turn-left-block"
                onClick={() => addCommand("TURN LEFT")}
                disabled={running}
              >
                TURN LEFT
              </button>
            </>
          )}

        {/* =================================
            AREA 02 — IF / ELSE
        ================================= */}

        {isBridge && (
          <>
            <button
              className="tool-block inspect-block"
              onClick={() => addCommand("CHECK")}
              disabled={running}
            >
              CHECK
            </button>

            <button
              className="tool-block condition-block"
              onClick={() => addCommand("IF")}
              disabled={running}
            >
              IF
            </button>

            <button
              className="tool-block cross-block"
              onClick={() => addCommand("CROSS")}
              disabled={running}
            >
              CROSS
            </button>

            <button
              className="tool-block else-block"
              onClick={() => addCommand("ELSE")}
              disabled={running}
            >
              ELSE
            </button>

            <button
              className="tool-block detour-block"
              onClick={() => addCommand("DETOUR")}
              disabled={running}
            >
              DETOUR
            </button>

            <button
              className="tool-block move-block"
              onClick={() => addCommand("MOVE")}
              disabled={running}
            >
              MOVE
            </button>

            <button
              className="tool-block turn-block"
              onClick={() => addCommand("TURN RIGHT")}
              disabled={running}
            >
              TURN RIGHT
            </button>

            <button
              className="tool-block turn-left-block"
              onClick={() => addCommand("TURN LEFT")}
              disabled={running}
            >
              TURN LEFT
            </button>
          </>
        )}

        {/* =================================
            AREA 03 — LOOPS
        ================================= */}

        {isForest && (
          <>
            <button
              className="tool-block repeat-block"
              onClick={() => addCommand("REPEAT 3")}
              disabled={running}
            >
              🔁 REPEAT 3
            </button>

            <button
              className="tool-block move-block"
              onClick={() => addCommand("MOVE")}
              disabled={running}
            >
              MOVE
            </button>

            <button
              className="tool-block turn-block"
              onClick={() => addCommand("TURN RIGHT")}
              disabled={running}
            >
              TURN RIGHT
            </button>

            <button
              className="tool-block turn-left-block"
              onClick={() => addCommand("TURN LEFT")}
              disabled={running}
            >
              TURN LEFT
            </button>

            <button
              className="tool-block scan-block"
              onClick={() => addCommand("SCAN")}
              disabled={running}
            >
              🔎 SCAN
            </button>

            <button
              className="tool-block wait-block"
              onClick={() => addCommand("WAIT")}
              disabled={running}
            >
              ⏱ WAIT
            </button>
          </>
        )}

        {/* =================================
            AREA 04 — VARIABLES
        ================================= */}

        {isDock && (
          <>
            <button
              className="tool-block variable-block"
              onClick={() => addCommand("SET SUPPLIES 0")}
              disabled={running}
            >
              📦 SET SUPPLIES = 0
            </button>

            <button
              className="tool-block collect-block"
              onClick={() => addCommand("COLLECT")}
              disabled={running}
            >
              ➕ COLLECT
            </button>

            <button
              className="tool-block check-variable-block"
              onClick={() =>
                addCommand("CHECK SUPPLIES")
              }
              disabled={running}
            >
              🔎 CHECK SUPPLIES
            </button>

            <button
              className="tool-block gate-block"
              onClick={() => addCommand("OPEN GATE")}
              disabled={running}
            >
              🔓 OPEN GATE
            </button>
          </>
        )}

        {/* =================================
            AREA 05 — DEBUGGING
        ================================= */}

        {isMountain && (
          <>
            <button
              className="tool-block debug-move-block"
              onClick={() => addCommand("MOVE")}
              disabled={running}
            >
              MOVE
            </button>

            <button
              className="tool-block debug-turn-block"
              onClick={() =>
                addCommand("TURN RIGHT")
              }
              disabled={running}
            >
              ↪ TURN RIGHT
            </button>

            <div className="debug-tip">
              💡 One instruction is wrong.
              <br />
              Remove the bug, then add the correct block.
            </div>
          </>
        )}

        {/* =================================
            AREA 06 — FINAL CHALLENGE
        ================================= */}

        {isFinal && (
          <>
            <button
              className="tool-block final-variable-block"
              onClick={() =>
                addCommand("SET ENERGY 0")
              }
              disabled={running}
            >
              ⚡ SET ENERGY = 0
            </button>

            <button
              className="tool-block final-collect-block"
              onClick={() =>
                addCommand("COLLECT ENERGY")
              }
              disabled={running}
            >
              ⚡ COLLECT ENERGY
            </button>

            <button
              className="tool-block final-repeat-block"
              onClick={() =>
                addCommand("REPEAT 3")
              }
              disabled={running}
            >
              🔁 REPEAT 3
            </button>

            <button
              className="tool-block final-charge-block"
              onClick={() =>
                addCommand("CHARGE")
              }
              disabled={running}
            >
              🔋 CHARGE
            </button>

            <button
              className="tool-block final-check-block"
              onClick={() =>
                addCommand("CHECK ENERGY")
              }
              disabled={running}
            >
              🔎 CHECK ENERGY
            </button>

            <button
              className="tool-block final-if-block"
              onClick={() =>
                addCommand("IF")
              }
              disabled={running}
            >
              🧠 IF
            </button>

            <button
              className="tool-block final-launch-block"
              onClick={() =>
                addCommand("LAUNCH")
              }
              disabled={running}
            >
              🚀 LAUNCH
            </button>

            <button
              className="tool-block final-abort-block"
              onClick={() =>
                addCommand("ABORT")
              }
              disabled={running}
            >
              🐛 ABORT
            </button>

            <div className="final-code-tip">
              💡 The escape sequence has a bug.
              <br />
              Remove <strong>ABORT</strong> and use{" "}
              <strong>LAUNCH</strong>.
            </div>
          </>
        )}

      </div>

      <div className="program-area">

        {commands.length === 0 && (
          <div className="empty-program">

            {isFinal
              ? "Build the final escape sequence..."
              : isMountain
              ? "Your broken program will appear here..."
              : isDock
              ? "Create a variable and collect the supplies..."
              : isForest
              ? "Arrange blocks to create a repeating path..."
              : isBridge
              ? "Arrange blocks to create your IF / ELSE logic..."
              : "Click blocks above to build your algorithm"}

          </div>
        )}

        {commands.map((command, index) => {

          let blockClass = "move-block";

          if (command === "TURN RIGHT") {
            blockClass = "turn-block";
          }

          if (command === "TURN LEFT") {
            blockClass = "turn-left-block";
          }

          if (command === "CHECK") {
            blockClass = "inspect-block";
          }

          if (command === "IF") {
            blockClass = "condition-block";
          }

          if (command === "CROSS") {
            blockClass = "cross-block";
          }

          if (command === "ELSE") {
            blockClass = "else-block";
          }

          if (command === "DETOUR") {
            blockClass = "detour-block";
          }

          if (command === "REPEAT 3") {
            blockClass = "repeat-block";
          }

          if (command === "SCAN") {
            blockClass = "scan-block";
          }

          if (command === "WAIT") {
            blockClass = "wait-block";
          }

          if (command === "SET SUPPLIES 0") {
            blockClass = "variable-block";
          }

          if (command === "COLLECT") {
            blockClass = "collect-block";
          }

          if (command === "CHECK SUPPLIES") {
            blockClass = "check-variable-block";
          }

          if (command === "OPEN GATE") {
            blockClass = "gate-block";
          }

          /* AREA 05 */

          if (
            isMountain &&
            command === "MOVE"
          ) {
            blockClass = "debug-move-block";
          }

          if (
            isMountain &&
            command === "TURN RIGHT"
          ) {
            blockClass = "debug-turn-block";
          }

          if (
            isMountain &&
            command === "TURN LEFT"
          ) {
            blockClass = "bug-block";
          }

          /* AREA 06 */

          if (
            isFinal &&
            command === "SET ENERGY 0"
          ) {
            blockClass = "final-variable-block";
          }

          if (
            isFinal &&
            command === "COLLECT ENERGY"
          ) {
            blockClass = "final-collect-block";
          }

          if (
            isFinal &&
            command === "REPEAT 3"
          ) {
            blockClass = "final-repeat-block";
          }

          if (
            isFinal &&
            command === "CHARGE"
          ) {
            blockClass = "final-charge-block";
          }

          if (
            isFinal &&
            command === "CHECK ENERGY"
          ) {
            blockClass = "final-check-block";
          }

          if (
            isFinal &&
            command === "IF"
          ) {
            blockClass = "final-if-block";
          }

          if (
            isFinal &&
            command === "LAUNCH"
          ) {
            blockClass = "final-launch-block";
          }

          if (
            isFinal &&
            command === "ABORT"
          ) {
            blockClass = "final-abort-block";
          }

          const isInsideLoop =
            isForest &&
            index > 0 &&
            commands[index - 1] === "REPEAT 3" &&
            command !== "REPEAT 3";

          const isFinalLoop =
            isFinal &&
            index > 0 &&
            commands[index - 1] === "REPEAT 3" &&
            command !== "REPEAT 3";

          const isBug =
            isMountain &&
            command === "TURN LEFT";

          const isFinalBug =
            isFinal &&
            command === "ABORT";

          return (
            <button
              key={index}
              className={`code-block ${blockClass} ${
                isInsideLoop ||
                isFinalLoop
                  ? "nested-code-block"
                  : ""
              } ${
                isBug ||
                isFinalBug
                  ? "debug-bug-block"
                  : ""
              }`}
              onClick={() =>
                removeCommand(index)
              }
              disabled={running}
              title="Click to remove this block"
            >
              <span>{index + 1}</span>

              {isBug && "🐛 "}

              {isFinalBug && "🐛 "}

              {(isInsideLoop ||
                isFinalLoop) &&
                "↳ "}

              {command}
            </button>
          );
        })}

      </div>

      {message && (
        <div
          className={`game-message ${
            message.includes("🎉")
              ? "success-message"
              : "error-message"
          }`}
        >
          {message}
        </div>
      )}

      <div className="block-hint">

        {isFinal
          ? "🚀 Build the sequence, fix the bug, and launch the escape pod."
          : isMountain
          ? "🐛 Click the broken block to remove it. Then add the correct instruction."
          : "💡 Click blocks to build your program. Click a placed block to remove it."}

      </div>

    </div>
  );
}

export default CodePanel;