import { INVALID_MOVE } from "boardgame.io/core";

const GRID_SIZE = 5;

const initializeCard = () => {
  let card = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    let row = [];
    for (let j = 0; j < GRID_SIZE; j++) {
      row.push(false);
    }
    card.push(row);
  }
  return card;
};

export const ChickenBingo = {
  setup: ({ ctx }) => {
    console.log("Setting up ChickenBingo");
    let playerCards = {};
    console.log(ctx.numPlayers);
    for (let i = 0; i < ctx.numPlayers; i++) {
      playerCards[i] = {
        card: initializeCard(),
        bet: null,
        ready: false,
      };
    }
    return {
      players: playerCards,
      chickenPosition: null,
    };
  },
  phases: {
    setup: {
      start: true,
      next: 'play',
      onBegin: (G, ctx) => {
        console.log('Game is in setup phase.');
      },
      onEnd: (G, ctx) => {
        console.log('Setup phase is ending, all players are ready.');
      },
      moves: {
        placeBet: (G, ctx, x, y) => {
          // Check if the bet is within bounds
          if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) {
            return INVALID_MOVE;
          }
          // Record the bet for the current player
          G.players[ctx.currentPlayer].bet = { x, y };
        },
        setReady: (G, ctx) => {
          G.players[ctx.currentPlayer].ready = true;
        },
      },
      endIf: (G, ctx) => {
        // End the setup phase if all players are ready
        if (typeof G.players !== 'object' || G.players === null) {
            console.error('G.players is undefined or null during setup endIf');
            return false;
          } return Object.values(G.players).every(p => p.ready);
        },
    },
    play: {
      onBegin: (G, ctx) => {
        console.log('Play phase has begun.');
      },
      moves: {
        chickenPoop: (G, ctx) => {
          let x = Math.floor(Math.random() * GRID_SIZE);
          let y = Math.floor(Math.random() * GRID_SIZE);
          G.chickenPosition = { x, y };
        },
      },
      endIf: (G, ctx) => {
        // End condition for the play phase or the game
      },
      onEnd: (G, ctx) => {
        // Logic to execute at the end of the play phase
      },
    },
  },
  turn: {
    stages: {
      betting: {
        moves: {
          placeBet: (G, ctx, x, y) => {
            G.players[ctx.currentPlayer].bet = { x, y };
          },
        },
      },
    },
  },
  endIf: (G, ctx) => {
    // Check if G.players is defined and is an object before proceeding
    if (typeof G.players !== 'object' || G.players === null) {
      console.error('G.players is undefined or null during game endIf');
      return false;
    }

    // Check if the chicken has pooped and if any player has won
    if (G.chickenPosition) {
      for (let playerId in G.players) {
        let player = G.players[playerId];
        if (player.bet &&
            player.bet.x === G.chickenPosition.x &&
            player.bet.y === G.chickenPosition.y) {
          return { winner: playerId };
        }
      }
      return { draw: true };
    }
  },
};

export default ChickenBingo;
