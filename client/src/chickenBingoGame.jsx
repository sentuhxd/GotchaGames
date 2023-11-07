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
      winner: null,
    };
  },
  phases: {
    betting: {
      start: true,
      next: 'poopReveal',
      turn: {
        minMoves: 1,
        maxMoves: 1
      },
      moves: {
        placeBet: ({G, ctx, events }, bet) => {
          if (bet.x < 0 || bet.x >= GRID_SIZE || bet.y < 0 || bet.y >= GRID_SIZE) {
            return INVALID_MOVE;
          }
      
          G.players[parseInt(ctx.currentPlayer)].bet = bet;
          events.endTurn();
          
        }
        // setReady: ({events}) => {
        //   // G.players[ctx.currentPlayer].ready = true;
        //   // events.endTurn()
        // },
      },
      endIf: ({G}) => {

        return Object.values(G.players).every(p => p.bet);
    
      },
    },
    poopReveal: {
     onBegin: ({ G, ctx, events}) => {
        // events.setActivePlayers({ all: 'poopReveal' });
         const x = Math.floor(Math.random() * GRID_SIZE);
          const y = Math.floor(Math.random() * GRID_SIZE);
          G.chickenPosition = { x, y };
           for (let playerId in G.players) {
            let player = G.players[playerId];
            if (player.bet && player.bet.x === G.chickenPosition.x && player.bet.y === G.chickenPosition.y) {
              G.winner = playerId;
            }
        }
          },
              // G.chickenPosition = {x: 2, y: 4};
      turn: {
        activePlayers: {
          currentPlayer: 'poopReveal',
        },
        stages: {
          poopReveal: {
            moves: { chickenPoop: () => { console.log("Poop will be revealed")} },
          },
        },
      },
      endIf: ({G}) => {
        return G.chickenPosition !== null;
      },
      next: 'gameOver',
    },
    gameOver: {
      onBegin: ({G}) => {
       
        if (G.winner) {
          console.log(`Player ${G.winner} wins!`);
        } else {
          console.log('No winner this round.');
        }
      },
    },
  },
  endIf: ({G}) => {
    if (G.winner) {
      return { winner: G.winner };
    }
  },
};

export default ChickenBingo;


  // phases: {
  //   setup: {
  //     start: true,
  //     next: 'play',
  //     onBegin: () => {
  //       console.log('Game is in setup phase.');
  //     },
  //     onEnd: () => {
  //       console.log('Setup phase is ending, all players are ready.');
  //     },
  //     moves: {
  //       placeBet: function ({G, ctx, playerId}, { x, y }) {
  //         let { players } = JSON.parse(JSON.stringify(G));
  //         // Check if the bet is within bounds
  //         if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) {
  //           return INVALID_MOVE;
  //         }
  //         // Record the bet for the current player
  //         console.log("current player in the context", ctx.currentPlayer)
  //         console.log("Should be the current player:", players[ctx.currentPlayer])
  //         players[ctx.currentPlayer].bet = {x, y};
  //         return {
  //           ...G,
  //           players
  //         };
  //       },
  //       setReady: (G, ctx) => {
  //         G.players[ctx.currentPlayer].ready = true;
  //       },
  //     },
  //     endIf: ({G, ctx}) => {
  //       // End the setup phase if all players are ready
  //       if (typeof G.players !== 'object' || G.players === null) {
  //           console.error('G.players is undefined or null during setup endIf');
  //           return false;
  //         } return Object.values(G.players).every(p => p.ready);
  //       },
  //   },
  //   play: {
  //     onBegin: ({G, ctx}) => {
  //       console.log('Play phase has begun.');
  //     },
  //     moves: {
  //       chickenPoop: ({G, ctx}) => {
  //         let x = Math.floor(Math.random() * GRID_SIZE);
  //         let y = Math.floor(Math.random() * GRID_SIZE);
  //         G.chickenPosition = { x, y };
  //       },
  //     },
  //     endIf: ({G, ctx}) => {
  //       // End condition for the play phase or the game
  //       return G.chickenPosition !== null;
  //     },
  //     onEnd: ({G, ctx}) => {
  //       // Logic to execute at the end of the play phase
  //       console.log('The play phase has ended because the chicken has pooped.');
  //     },
  //   },
  // },
  // turn: {
  //   stages: {
  //     betting: {
  //       moves: {
  //         placeBet: ({G, ctx}, x, y) => {
  //           G.players[ctx.currentPlayer].bet = { x, y };
  //         },
  //       },
  //     },
  //   },
  // },
  // endIf: ({G}) => {
  //   // Check if G.players is defined and is an object before proceeding
  //   if (typeof G.players !== 'object' || G.players === null) {
  //     console.error('G.players is undefined or null during game endIf');
  //     return false;
  //   }

  //   // Check if the chicken has pooped and if any player has won
  //   if (G.chickenPosition) {
  //     for (let playerId in G.players) {
  //       let player = G.players[playerId];
  //       if (player.bet &&
  //           player.bet.x === G.chickenPosition.x &&
  //           player.bet.y === G.chickenPosition.y) {
  //         return { winner: playerId };
  //       }
  //     }
  //     return { draw: true };
  //   }
  // },
