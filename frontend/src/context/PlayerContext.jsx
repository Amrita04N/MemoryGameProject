import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [memoryFacts, setMemoryFacts] = useState([]);
  const [path, setPath] = useState([]);

  const addToInventory = (item) => setInventory((prev) => [...prev, item]);
  const addMemoryFact = (fact) => setMemoryFacts((prev) => [...prev, fact]);
  const updatePath = (sceneId) => setPath((prev) => [...prev, sceneId]);

  return (
    <PlayerContext.Provider
      value={{ inventory, memoryFacts, path, addToInventory, addMemoryFact, updatePath }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
