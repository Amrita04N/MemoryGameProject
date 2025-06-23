import React, { useEffect, useState } from "react";
import SceneViewer from "./components/SceneViewer";
import ChoicePanel from "./components/ChoicePanel";
import { fetchScene, postChoice } from "./api/scene";

export default function App() {
  const [scene, setScene] = useState(null);

  useEffect(() => {
    fetchScene(1).then(setScene);
  }, []);

  const handleChoiceSelect = async (choice) => {
    const nextScene = await postChoice(choice);
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
