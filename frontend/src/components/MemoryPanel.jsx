import { usePlayer } from "../context/PlayerContext";

export default function MemoryPanel() {
  const { memoryFacts } = usePlayer();
  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="font-bold mb-2">Memory Facts</h2>
      <ul>{memoryFacts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
    </div>
  );
}
