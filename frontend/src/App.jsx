import React, { useEffect, useState } from "react";
import SceneViewer from "./components/SceneViewer";
import ChoicePanel from "./components/ChoicePanel";
import MemoryLog from "./components/MemoryLog";
import ResumePopup from "./components/StartPopup";

import { dummyScenes } from "./data/dummyScenes";
import { usePlayer } from "./context/PlayerContext";
import { fetchProgress, saveProgress, resetProgress as resetProgressAPI } from "./api/progress";

const USER_ID = "player123";

export default function App() {
  const [currentSceneId, setCurrentSceneId] = useState(1);
  const [scene, setScene] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(""); // ✨ Feedback for wrong choice

  const {
    path,
    memory,
    addToInventory,
    addMemoryFact,
    updatePath,
    resetProgress: resetContext,
  } = usePlayer();

  const isVictory = scene?.victory === true;

  // Show resume popup on mount
  useEffect(() => {
    setShowResume(true);
  }, []);

  // Update scene based on ID
  useEffect(() => {
    const current = dummyScenes[currentSceneId];
    setScene(current);
    if (current?.memoryKey) updatePath(current.memoryKey);
  }, [currentSceneId]);

  const handleResume = async () => {
    try {
      const data = await fetchProgress(USER_ID);
      setCurrentSceneId(data.scene_id || 1);
      updatePath(data.path || "");
      data.memory?.forEach(fact => addMemoryFact(fact));
      if (data.score !== undefined) {
        setScore(data.score);
      }
    } catch (err) {
      console.error("Error resuming progress", err);
    }
    setShowResume(false);
  };

  const handleRestart = async () => {
    try {
      await resetProgressAPI(USER_ID);
      resetContext();
      setCurrentSceneId(1);
      setScore(0);
      setFeedback("");
      setShowResume(false);
    } catch (err) {
      console.error("Error resetting game", err);
    }
  };

  const handleChoiceSelect = (choice) => {
    if (!scene) return;

    const currentAnswer = scene.answer?.toLowerCase();
    const selected = choice.toLowerCase();

    if (selected === currentAnswer) {
      // Correct Answer
      addMemoryFact(`${scene.clue}: Correctly identified ${scene.question} as ${choice}`);
      addToInventory("Clue Found");
      setScore(prev => prev + 10);
      setFeedback("✅ Correct! Moving to next scene...");

      // Advance to next scene
      if (dummyScenes[currentSceneId + 1]) {
        setTimeout(() => {
          setCurrentSceneId(currentSceneId + 1);
          setFeedback("");
        }, 1000);
      }
    } else {
      // Wrong Answer
      addMemoryFact(`Attempted ${scene.question}, answered ${choice}, expected ${currentAnswer}`);
      setScore(prev => Math.max(prev - 5, 0));
      setFeedback("❌ Wrong answer. Try again!");
    }

    // Save progress
    saveProgress(USER_ID, {
      scene_id: currentSceneId,
      memory,
      path,
      score,
    });
  };

  // 🎉 Victory Screen
  if (isVictory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 text-white flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold text-amber-400 mb-4">🎉 Case Closed! 🎉</h1>
        <p className="text-lg mb-2">You've successfully solved the Blackwood Manor mystery.</p>
        <p className="text-md text-gray-300">Final Score: <span className="text-white font-bold">{score}</span></p>
        <button
          onClick={handleRestart}
          className="mt-6 bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded shadow text-white font-semibold"
        >
          Restart Game
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-serif flex flex-col items-center justify-start p-6 space-y-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] pointer-events-none"></div>

      {/* Score Card */}
      <div className="absolute top-4 right-4 z-10 bg-gray-800 text-amber-400 px-4 py-2 rounded-lg shadow-lg border border-gray-600">
        <p className="text-sm font-semibold">Score: <span className="text-white">{score}</span></p>
      </div>

      {/* Title */}
      <div className="bg-gray-800 text-amber-500 rounded-md shadow-md px-6 py-3 text-center">
        <h1 className="text-3xl font-bold">🏚 Mystery Memory Quest</h1>
      </div>

      {/* Scene Title */}
      <div className="bg-gray-700 rounded px-4 py-2 shadow-md text-amber-400">
        <h2 className="text-xl italic font-semibold">{scene?.title}</h2>
      </div>

      {/* Scene Box */}
      <div className="bg-gray-800 border border-gray-600 rounded-xl shadow-lg p-6 max-w-md w-full">
        {scene ? (
          <SceneViewer
            title={scene.title}
            description={scene.description}
            image={scene.image}
            imageAlt={scene.imageAlt}
            imageUrl={scene.imageUrl}
          />
        ) : (
          <p className="text-amber-500 text-center">Loading scene...</p>
        )}
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="bg-black text-white px-4 py-2 rounded shadow border border-gray-500">
          {feedback}
        </div>
      )}

      {/* Memory Log */}
      <MemoryLog />

      {/* Choices Panel */}
      {scene?.question && scene?.answer && (
        <div className="bg-gray-800 border border-gray-600 rounded-xl shadow-lg p-6 max-w-md w-full">
          <ChoicePanel
            question={scene.question}
            answer={scene.answer}
            onChoiceSelect={handleChoiceSelect}
          />
        </div>
      )}

      {/* Final Challenge Submit Button */}
      {scene?.finalChallenge && !scene?.question && (
        <div className="mt-4">
          <button
            className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg text-white shadow-md"
            onClick={() => setCurrentSceneId(currentSceneId + 1)}
          >
            Submit Final Deduction
          </button>
        </div>
      )}
      {/* Footer */}
      <footer className="text-xs text-gray-400 text-center mt-6">
        Score: <span className="text-amber-400">{score}</span> | Path: {path || "Start"} | <span className="text-amber-400 hover:underline cursor-pointer">View Log</span>
      </footer>

      {/* Resume / Restart Popup */}
      {showResume && <ResumePopup onResume={handleResume} onRestart={handleRestart} />}
    </div>
  );
}
