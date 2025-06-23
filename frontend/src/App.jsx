import React, { useEffect, useState } from "react";
import SceneViewer from "./components/SceneViewer";
import ChoicePanel from "./components/ChoicePanel";
import { fetchScene, postChoice } from "./api/scene";
import { saveProgress } from "./api/progress"; // <-- NEW
import { usePlayer } from "./context/PlayerContext"; // <-- NEW

export default function App() {
  const [scene, setScene] = useState(null);

  // 🧠 Access player state and actions
  const {
    path,
    inventory,
    memoryFacts,
    addToInventory,
    addMemoryFact,
    updatePath,
  } = usePlayer();

  // 🔁 Initial scene load
  useEffect(() => {
    fetchScene(1).then((data) => {
      setScene(data);
      updatePath(data.id); // Start scene tracking
    });
  }, []);

  // 🔁 Save progress whenever player state updates
  useEffect(() => {
    if (path.length > 0) {
      saveProgress("user123", {
        user_id: "user123",
        path,
        inventory,
        memory: memoryFacts,
      });
    }
  }, [path, inventory, memoryFacts]);

  // 🕹️ Handle player choice
  const handleChoiceSelect = async (choice) => {
    addMemoryFact(`Chose: ${choice}`);

    const nextScene = await postChoice(choice);

    // Example: simulate adding inventory
    if (nextScene.title === "The River") {
      addToInventory("Wooden Stick");
    }

    updatePath(nextScene.id);
    setScene(nextScene);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {scene && (
        <>
          <SceneViewer title={scene.title} narrative={scene.narrative} />
          <ChoicePanel choices={scene.choices} onChoiceSelect={handleChoiceSelect} />
        </>
      )}
    </div>
  );
}

import { saveProgress } from "./api/progress";
import { usePlayer } from "./context/PlayerContext";

useEffect(() => {
  const data = {
    path,
    inventory,
    memory: memoryFacts,
  };
  saveProgress("user123", data);  // hardcoded user for now
}, [path, inventory, memoryFacts]);

