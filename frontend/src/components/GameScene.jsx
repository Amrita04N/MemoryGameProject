import { useEffect, useState } from "react";
import { fetchScene } from "../api/scene";

const GameScene = () => {
  const [scene, setScene] = useState(null);

  useEffect(() => {
    fetchScene().then(setScene);
  }, []);

  if (!scene) return <p>Loading...</p>;

  return (
    <div>
      <p>{scene.description}</p>
      {scene.choices.map((choice, i) => (
        <button key={i}>{choice}</button>
      ))}
    </div>
  );
};

export default GameScene;
