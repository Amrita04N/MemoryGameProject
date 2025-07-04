// src/api/scene.js
import { dummyScenes } from "../data/dummyScenes";

// Simulate API delay
const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// GET request to fetch a scene by ID (using dummy data)
export const fetchScene = async (id) => {
  await simulateDelay(500); // Simulate network delay
  return dummyScenes[id];
};

// POST request to send a choice and get next scene (dummy logic)
export const postChoice = async (choice) => {
  await simulateDelay(500);
  
  // Simple logic: choose next scene based on text
  if (choice.includes("left") || choice.includes("boat")) return dummyScenes[2];
  if (choice.includes("right") || choice.includes("castle")) return dummyScenes[3];
  
  return dummyScenes[1]; // default fallback
};

