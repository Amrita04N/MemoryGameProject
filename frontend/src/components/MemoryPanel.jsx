import React from "react";

export default function MemoryPanel({ facts }) {
  return (
    <div className="bg-gray-700 border border-gray-600 rounded-lg p-2 shadow-md">
      <h3 className="text-xs text-amber-600 font-medium mb-1">📜 Case Notes</h3>
      <ul className="list-decimal pl-3 text-xs text-gray-300">
        {facts && facts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
    </div>
  );
}