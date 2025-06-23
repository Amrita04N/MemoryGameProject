import React from "react";

export default function Card({ card, handleClick, isFlipped }) {
  return (
    <div
      className="w-24 h-24 m-2 bg-blue-500 text-white rounded-lg flex items-center justify-center text-4xl cursor-pointer select-none shadow-md"
      onClick={() => handleClick(card)}
    >
      {isFlipped || card.matched ? card.emoji : "❓"}
    </div>
  );
}