import React from "react";

export default function MemoryPanel({ facts }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 w-full max-w-md">
      <h3 className="font-semibold text-lg mb-2">🧠 Memory</h3>
      <ul className="list-disc pl-5 text-gray-700">
        {facts.length > 0 ? facts.map((fact, idx) => <li key={idx}>{fact}</li>) : <li>No facts yet</li>}
      </ul>
    </div>
  );
}
