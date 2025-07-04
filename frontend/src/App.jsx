import React, { useEffect, useState } from "react";
import SceneViewer from "./components/SceneViewer";
import ChoicePanel from "./components/ChoicePanel"; // ✅ default import
import { dummyScenes } from "./data/dummyScenes";
import { usePlayer } from "./context/PlayerContext";
import InventoryPanel from "./components/InventoryPanel";
import MemoryPanel from "./components/MemoryPanel";

export default function App() {
  const [scene, setScene] = useState(null);

  const {
    path,
    inventory,
    memoryFacts,
    addToInventory,
    addMemoryFact,
    updatePath,
  } = usePlayer();

  useEffect(() => {
    const sceneToLoad = dummyScenes[1];
    setScene(sceneToLoad);
    updatePath(sceneToLoad.id);
  }, []);

  const handleChoiceSelect = (choice) => {
    addMemoryFact(`Chose: ${choice}`);

    // Simulate inventory collection (optional logic)
    if (choice.toLowerCase().includes("boat")) {
      addToInventory("Wooden Paddle");
    } else if (choice.toLowerCase().includes("castle")) {
      addToInventory("Rusty Key");
    }

    // Navigate to next dummy scene
    let nextId;
    if (choice.toLowerCase().includes("left") || choice.toLowerCase().includes("boat")) {
      nextId = 2;
    } else if (choice.toLowerCase().includes("right") || choice.toLowerCase().includes("castle")) {
      nextId = 3;
    } else {
      nextId = 1;
    }

    const nextScene = dummyScenes[nextId];
    setScene(nextScene);
    updatePath(nextScene.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-6">🧠 Memory Game</h1>

      {/* ✅ Inventory & Memory UI Panels */}
      <InventoryPanel items={inventory} />
      <MemoryPanel facts={memoryFacts} />

      {scene && (
        <>
          <SceneViewer
            title={scene.title}
            narrative={scene.narrative}
            image={scene.image}
          />
          <ChoicePanel
            choices={scene.choices}
            onChoiceSelect={handleChoiceSelect}
          />
        </>
      )}
    </div>
  );
}
