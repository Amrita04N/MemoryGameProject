import React from "react";

export default function ChoicePanel({ question, answer, onChoiceSelect }) {
  // Generate a plausible wrong answer based on the question context
  const getWrongAnswer = (question, answer) => {
    if (question.includes("time")) {
      return answer === "9 pm" ? "8 pm" : "10 pm"; // Time-based wrong answer
    } else if (question.includes("building")) {
      return answer === "manor" ? "house" : "cottage"; // Building-based wrong answer
    } else if (question.includes("company name")) {
      return answer === "phoenix investments" ? "blackwood enterprises" : "phoenix investments"; // Company-based wrong answer
    } else if (question.includes("months ago")) {
      return answer === "6" ? "3" : "12"; // Number-based wrong answer
    } else if (question.includes("full name")) {
      return answer === "david phoenix" ? "marcus blackwood" : "david chen"; // Name-based wrong answer
    } else if (question.includes("object")) {
      return answer === "decanter" ? "glass" : "vase"; // Object-based wrong answer
    } else if (question.includes("left the manor")) {
      return answer === "9:15" ? "9:00" : "9:30"; // Time-based wrong answer
    } else if (question.includes("motive")) {
      return answer === "medical treatment" ? "revenge" : "money"; // Motive-based wrong answer
    } else if (question.includes("days before")) {
      return answer === "7" ? "5" : "10"; // Number-based wrong answer
    } else if (question.includes("original intention")) {
      return answer === "threaten for money" ? "steal documents" : "ask for help"; // Intention-based wrong answer
    }
    return "wrong"; // Default fallback
  };

  const wrongAnswer = getWrongAnswer(question, answer);

  return (
    <div className="mt-4">
      <h3 className="text-md text-amber-600 font-medium mb-2">{question}</h3>
      <div className="space-y-2">
        <button
          onClick={() => onChoiceSelect(answer)}
          className="w-full bg-gray-600 text-white text-sm py-2 px-4 rounded-md hover:bg-gray-500 transition duration-200 shadow-inner"
        >
          {answer}
        </button>
        <button
          onClick={() => onChoiceSelect(wrongAnswer)}
          className="w-full bg-gray-600 text-white text-sm py-2 px-4 rounded-md hover:bg-gray-500 transition duration-200 shadow-inner"
        >
          {wrongAnswer}
        </button>
      </div>
    </div>
  );
}