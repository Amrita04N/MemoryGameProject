import React from "react";

export default function InventoryPanel({ items }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 w-full max-w-md">
      <h3 className="font-semibold text-lg mb-2">🎒 Inventory</h3>
      <ul className="list-disc pl-5 text-gray-700">
        {items.length > 0 ? items.map((item, idx) => <li key={idx}>{item}</li>) : <li>Empty</li>}
      </ul>
    </div>
  );
}

