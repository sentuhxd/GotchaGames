const setup = () => {
  return {
      players: {
          '0': { position: 0 }
      },
      chutes: { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 },
      ladders: { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 }
  };
};

const rollDie = (G, ctx) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  let newPosition = G.players['0'].position + roll;

  if (G.chutes[newPosition]) {
      newPosition = G.chutes[newPosition];
  } else if (G.ladders[newPosition]) {
      newPosition = G.ladders[newPosition];
  }

  G.players['0'].position = newPosition;
};

export const ChutesGame = {
  setup: setup,
  moves: { rollDie: rollDie },
};
