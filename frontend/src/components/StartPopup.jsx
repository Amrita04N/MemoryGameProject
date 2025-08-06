import React from "react";

export default function StartPopup({ onResume, onRestart }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center space-y-4">
        <h2 className="text-2xl font-bold text-amber-400">🧠 Welcome Detective!</h2>
        <p className="text-sm">Do you want to resume from where you left off or start a new investigation?</p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onResume}
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white transition"
          >
            ▶️ Resume
          </button>
          <button
            onClick={onRestart}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white transition"
          >
            🔁 Restart
          </button>
        </div>
      </div>
    </div>
  );
}
