export const chutesGame = {
  setup: () => ({ cells: Array(100).fill(null) }),
  turn: {
    moveLimit: 1,
  },
  moves: {
    rollDie: ({ G, random }) => {
      G.dieRoll = random.D6(); // dieRoll = 1–6
    },
  },
};
