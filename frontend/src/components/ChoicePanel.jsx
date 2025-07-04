// src/components/ChoicePanel.jsx
const ChoicePanel = ({ choices = [], onChoiceSelect }) => (
  <div className="flex flex-col gap-2">
    {choices.map((choice, index) => (
      <button
        key={index}
        onClick={() => onChoiceSelect(choice)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {choice}
      </button>
    ))}
  </div>
);

export default ChoicePanel;
