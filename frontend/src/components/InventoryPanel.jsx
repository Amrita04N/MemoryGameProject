import { usePlayer } from "../context/PlayerContext";

export default function InventoryPanel() {
  const { inventory } = usePlayer();
  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="font-bold mb-2">Inventory</h2>
      <ul>{inventory.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
}

