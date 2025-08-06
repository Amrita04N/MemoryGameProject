import React, { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [inventory, setInventory] = useState([]);
  const [memory, setMemory] = useState([]);
  const [path, setPath] = useState("");
  const [score, setScore] = useState(0); // ✅ Add score

  const addToInventory = (item) => setInventory([...inventory, item]);
  const addMemoryFact = (fact) => setMemory([...memory, fact]);
  const updatePath = (sceneId) => setPath((prev) => `${prev} -> ${sceneId}`);

  const addScore = (points) => setScore((prev) => prev + points); // ✅ Increment score
  const resetScore = () => setScore(0); // ✅ Reset score

  const resetProgress = () => {
    setInventory([]);
    setMemory([]);
    setPath("");
    setScore(0); // ✅ Reset score too
  };

  return (
    <PlayerContext.Provider
      value={{
        inventory,
        memory,
        path,
        score, // ✅ expose score
        addToInventory,
        addMemoryFact,
        updatePath,
        addScore,
        resetScore,
        resetProgress,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
