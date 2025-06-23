export default function InventoryPanel({ items }) {
  return (
    <div className="p-2 bg-gray-100 rounded shadow mt-4">
      <h4 className="font-semibold">Inventory:</h4>
      <ul>
        {items.map((item, i) => <li key={i}>• {item}</li>)}
      </ul>
    </div>
  );
}
