// src/components/ChoicePanel.jsx
import React from "react";

export default function ChoicePanel({ choices, onChoiceSelect }) {
  return (
    <div className="mt-6 flex flex-col gap-4">
      {choices.map((choice, index) => (
        <button
          key={index}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => onChoiceSelect(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
}
