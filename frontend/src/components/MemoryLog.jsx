// src/components/MemoryLog.jsx
import React, { useState } from "react";
import { usePlayer } from "../context/PlayerContext";

export default function MemoryLog() {
  const { memory } = usePlayer();
  const [showLog, setShowLog] = useState(false);

  return (
    <div className="w-full max-w-md text-sm text-amber-300 animate-fade-in">
      <button
        onClick={() => setShowLog(!showLog)}
        className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-md shadow hover:bg-gray-700 transition mb-2 w-full text-left"
      >
        🧠 {showLog ? "Hide" : "Show"} Memory Log
      </button>

      {showLog && (
        <div className="bg-gray-900 p-4 rounded-md shadow-inner border border-gray-600 max-h-40 overflow-y-auto space-y-1">
          {memory.length === 0 ? (
            <p className="text-gray-400 italic">No memory facts yet.</p>
          ) : (
            memory.map((fact, idx) => (
              <div key={idx} className="text-gray-200">
                • {fact}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
