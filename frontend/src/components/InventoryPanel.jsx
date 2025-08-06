import React from "react";

export default function InventoryPanel({ items }) {
  return (
    <div className="bg-gray-700 border border-gray-600 rounded-lg p-2 shadow-md">
      <h3 className="text-xs text-amber-600 font-medium mb-1">🎒 Evidence</h3>
      <ul className="list-disc pl-3 text-xs text-gray-300">
        {items && items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}