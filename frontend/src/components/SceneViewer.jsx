export default function SceneViewer({ title, narrative }) {
  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{narrative}</p>
    </div>
  );
}
