import IsVictory from "./chutesVictory";
import bluepiece from "./assets/bluepiece.png";
import redpiece from "./assets/redpiece.png";

export const chutesGame = {
  setup: () => ({
    cells: Array(100).fill([]),
    players: {
      0: { position: -1, piece: bluepiece },
      1: { position: -1, piece: redpiece },
    },
    spaces: [
      {
        space: 1,
        type: "ladder",
        goesTo: 38,
        occupied: false,
      },
      {
        space: 2,
        type: "normal",
        goesTo: 2,
        occupied: false,
      },
      {
        space: 3,
        type: "normal",
        goesTo: 3,
        occupied: false,
      },
      {
        space: 4,
        type: "ladder",
        goesTo: 14,
        occupied: false,
      },
      {
        space: 5,
        type: "normal",
        goesTo: 5,
        occupied: false,
      },
      {
        space: 6,
        type: "normal",
        goesTo: 6,
        occupied: false,
      },
      {
        space: 7,
        type: "normal",
        goesTo: 7,
        occupied: false,
      },
      {
        space: 8,
        type: "normal",
        goesTo: 8,
        occupied: false,
      },
      {
        space: 9,
        type: "ladder",
        goesTo: 31,
        occupied: false,
      },
      {
        space: 10,
        type: "normal",
        goesTo: 10,
        occupied: false,
      },
      {
        space: 11,
        type: "normal",
        goesTo: 11,
        occupied: false,
      },
      {
        space: 12,
        type: "normal",
        goesTo: 12,
        occupied: false,
      },
      {
        space: 13,
        type: "normal",
        goesTo: 13,
        occupied: false,
      },
      {
        space: 14,
        type: "normal",
        goesTo: 14,
        occupied: false,
      },
      {
        space: 15,
        type: "normal",
        goesTo: 15,
        occupied: false,
      },
      {
        space: 16,
        type: "chute",
        goesTo: 6,
        occupied: false,
      },
      {
        space: 17,
        type: "normal",
        goesTo: 17,
        occupied: false,
      },
      {
        space: 18,
        type: "normal",
        goesTo: 18,
        occupied: false,
      },
      {
        space: 19,
        type: "normal",
        goesTo: 19,
        occupied: false,
      },
      {
        space: 20,
        type: "normal",
        goesTo: 20,
        occupied: false,
      },
      {
        space: 21,
        type: "ladder",
        goesTo: 42,
        occupied: false,
      },
      {
        space: 22,
        type: "normal",
        goesTo: 22,
        occupied: false,
      },
      {
        space: 23,
        type: "normal",
        goesTo: 23,
        occupied: false,
      },
      {
        space: 24,
        type: "normal",
        goesTo: 24,
        occupied: false,
      },
      {
        space: 25,
        type: "normal",
        goesTo: 25,
        occupied: false,
      },
      {
        space: 26,
        type: "normal",
        goesTo: 26,
        occupied: false,
      },
      {
        space: 27,
        type: "normal",
        goesTo: 27,
        occupied: false,
      },
      {
        space: 28,
        type: "ladder",
        goesTo: 84,
        occupied: false,
      },
      {
        space: 29,
        type: "normal",
        goesTo: 29,
        occupied: false,
      },
      {
        space: 30,
        type: "normal",
        goesTo: 30,
        occupied: false,
      },
      {
        space: 31,
        type: "normal",
        goesTo: 31,
        occupied: false,
      },
      {
        space: 32,
        type: "normal",
        goesTo: 32,
        occupied: false,
      },
      {
        space: 33,
        type: "normal",
        goesTo: 33,
        occupied: false,
      },
      {
        space: 34,
        type: "normal",
        goesTo: 34,
        occupied: false,
      },
      {
        space: 35,
        type: "normal",
        goesTo: 35,
        occupied: false,
      },
      {
        space: 36,
        type: "ladder",
        goesTo: 44,
        occupied: false,
      },
      {
        space: 37,
        type: "normal",
        goesTo: 37,
        occupied: false,
      },
      {
        space: 38,
        type: "normal",
        goesTo: 38,
        occupied: false,
      },
      {
        space: 39,
        type: "normal",
        goesTo: 39,
        occupied: false,
      },
      {
        space: 40,
        type: "normal",
        goesTo: 40,
        occupied: false,
      },
      {
        space: 41,
        type: "normal",
        goesTo: 41,
        occupied: false,
      },
      {
        space: 42,
        type: "normal",
        goesTo: 42,
        occupied: false,
      },
      {
        space: 43,
        type: "normal",
        goesTo: 43,
        occupied: false,
      },
      {
        space: 44,
        type: "normal",
        goesTo: 44,
        occupied: false,
      },
      {
        space: 45,
        type: "normal",
        goesTo: 45,
        occupied: false,
      },
      {
        space: 46,
        type: "normal",
        goesTo: 46,
        occupied: false,
      },
      {
        space: 47,
        type: "chute",
        goesTo: 26,
        occupied: false,
      },
      {
        space: 48,
        type: "normal",
        goesTo: 48,
        occupied: false,
      },
      {
        space: 49,
        type: "chute",
        goesTo: 10,
        occupied: false,
      },
      {
        space: 50,
        type: "normal",
        goesTo: 50,
        occupied: false,
      },
      {
        space: 51,
        type: "ladder",
        goesTo: 67,
        occupied: false,
      },
      {
        space: 52,
        type: "normal",
        goesTo: 52,
        occupied: false,
      },
      {
        space: 53,
        type: "normal",
        goesTo: 53,
        occupied: false,
      },
      {
        space: 54,
        type: "normal",
        goesTo: 54,
        occupied: false,
      },
      {
        space: 55,
        type: "normal",
        goesTo: 55,
        occupied: false,
      },
      {
        space: 56,
        type: "chute",
        goesTo: 54,
        occupied: false,
      },
      {
        space: 57,
        type: "normal",
        goesTo: 57,
        occupied: false,
      },
      {
        space: 58,
        type: "normal",
        goesTo: 58,
        occupied: false,
      },
      {
        space: 59,
        type: "normal",
        goesTo: 59,
        occupied: false,
      },
      {
        space: 60,
        type: "normal",
        goesTo: 60,
        occupied: false,
      },
      {
        space: 61,
        type: "normal",
        goesTo: 61,
        occupied: false,
      },
      {
        space: 62,
        type: "chute",
        goesTo: 23,
        occupied: false,
      },
      {
        space: 63,
        type: "normal",
        goesTo: 63,
        occupied: false,
      },
      {
        space: 64,
        type: "normal",
        goesTo: 64,
        occupied: false,
      },
      {
        space: 65,
        type: "normal",
        goesTo: 65,
        occupied: false,
      },
      {
        space: 66,
        type: "normal",
        goesTo: 66,
        occupied: false,
      },
      {
        space: 67,
        type: "normal",
        goesTo: 67,
        occupied: false,
      },
      {
        space: 68,
        type: "normal",
        goesTo: 68,
        occupied: false,
      },
      {
        space: 69,
        type: "normal",
        goesTo: 69,
        occupied: false,
      },
      {
        space: 70,
        type: "normal",
        goesTo: 70,
        occupied: false,
      },
      {
        space: 71,
        type: "ladder",
        goesTo: 90,
        occupied: false,
      },
      {
        space: 72,
        type: "normal",
        goesTo: 72,
        occupied: false,
      },
      {
        space: 73,
        type: "normal",
        goesTo: 73,
        occupied: false,
      },
      {
        space: 74,
        type: "normal",
        goesTo: 74,
        occupied: false,
      },
      {
        space: 75,
        type: "normal",
        goesTo: 75,
        occupied: false,
      },
      {
        space: 76,
        type: "normal",
        goesTo: 76,
        occupied: false,
      },
      {
        space: 77,
        type: "normal",
        goesTo: 77,
        occupied: false,
      },
      {
        space: 78,
        type: "normal",
        goesTo: 78,
        occupied: false,
      },
      {
        space: 79,
        type: "normal",
        goesTo: 79,
        occupied: false,
      },
      {
        space: 80,
        type: "ladder",
        goesTo: 100,
        occupied: false,
      },
      {
        space: 81,
        type: "normal",
        goesTo: 81,
        occupied: false,
      },
      {
        space: 82,
        type: "normal",
        goesTo: 82,
        occupied: false,
      },
      {
        space: 83,
        type: "normal",
        goesTo: 83,
        occupied: false,
      },
      {
        space: 84,
        type: "normal",
        goesTo: 84,
        occupied: false,
      },
      {
        space: 85,
        type: "normal",
        goesTo: 85,
        occupied: false,
      },
      {
        space: 86,
        type: "normal",
        goesTo: 86,
        occupied: false,
      },
      {
        space: 87,
        type: "chute",
        goesTo: 24,
        occupied: false,
      },
      {
        space: 88,
        type: "normal",
        goesTo: 88,
        occupied: false,
      },
      {
        space: 89,
        type: "normal",
        goesTo: 89,
        occupied: false,
      },
      {
        space: 90,
        type: "normal",
        goesTo: 90,
        occupied: false,
      },
      {
        space: 91,
        type: "normal",
        goesTo: 91,
        occupied: false,
      },
      {
        space: 92,
        type: "normal",
        goesTo: 92,
        occupied: false,
      },
      {
        space: 93,
        type: "chute",
        goesTo: 73,
        occupied: false,
      },
      {
        space: 94,
        type: "normal",
        goesTo: 94,
        occupied: false,
      },
      {
        space: 95,
        type: "chute",
        goesTo: 75,
        occupied: false,
      },
      {
        space: 96,
        type: "normal",
        goesTo: 96,
        occupied: false,
      },
      {
        space: 97,
        type: "normal",
        goesTo: 97,
        occupied: false,
      },
      {
        space: 98,
        type: "chute",
        goesTo: 78,
        occupied: false,
      },
      {
        space: 99,
        type: "normal",
        goesTo: 99,
        occupied: false,
      },
      {
        space: 100,
        type: "winner",
        goesTo: 100,
        occupied: false,
      },
      {
        space: 101,
        type: "winner",
        goesTo: 100,
        occupied: false,
      },
      {
        space: 102,
        type: "winner",
        goesTo: 100,
        occupied: false,
      },
      {
        space: 103,
        type: "winner",
        goesTo: 100,
        occupied: false,
      },
      {
        space: 104,
        type: "winner",
        goesTo: 100,
        occupied: false,
      },
      {
        space: 105,
        type: "winner",
        goesTo: 100,
        occupied: false,
      },
    ],
  }),
  turn: {
    minMoves: 1,
    maxMoves: 1,
  },
  moves: {
    rollDie: ({ ctx, G, random }) => {
      const currentPlayer = G.players[ctx.currentPlayer];
      G.dieRoll = random.D6(); // dieRoll = 1–6
      const oldPosition = currentPlayer.position;
      resetSpace(G, oldPosition);
      let newPosition = currentPlayer.position + G.dieRoll;

      let position = G.spaces[newPosition].goesTo - 1;
      G.players[ctx.currentPlayer].position = position;

      G.cells[position].push(G.players[ctx.currentPlayer].piece);
    },
  },
  endIf: ({ G, ctx }) => {
    if (IsVictory(G, ctx)) {
      alert("Game Over! Winner: Player " + ctx.currentPlayer);
      return { winner: ctx.currentPlayer };
    }
  },
  ai: {
    enumerate: (G, ctx) => {
      let moves = [{ move: "rollDie" }];
      return moves;
    },
  },
};
function resetSpace(G, oldPosition) {
  if (oldPosition === -1) {
    G.cells[oldPosition] = [];
  } else if (JSON.parse(JSON.stringify(G.cells[oldPosition])).length === 2) {
    JSON.parse(JSON.stringify(G.cells[oldPosition].shift()));
  } else {
    G.cells[oldPosition] = [];
  }
}
