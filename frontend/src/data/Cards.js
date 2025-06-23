const cardData = [
  { id: 1, emoji: "🍕", matched: false },
  { id: 2, emoji: "🍔", matched: false },
  { id: 3, emoji: "🍟", matched: false },
  { id: 4, emoji: "🌮", matched: false },
  { id: 5, emoji: "🍣", matched: false },
  { id: 6, emoji: "🍩", matched: false },
];

// duplicate and shuffle cards
export function generateShuffledCards() {
  const duplicated = [...cardData, ...cardData];
  return duplicated
    .sort(() => Math.random() - 0.5)
    .map((card, index) => ({ ...card, key: index }));
}
