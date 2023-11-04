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
                bet: null
            };
        }
        return {
            players: playerCards,
            chickenPosition: null,
        };
    },
    moves: {
        placeBet: (G, ctx, x, y) => {
            console.log("placeBet called with", x, y);
            
            // Log the current state for debugging
            console.log("Current Player: ", ctx.currentPlayer);
            console.log("Players: ", G.players);
    
            // Check if players object exists and the current player is defined
            if (G.players && G.players.hasOwnProperty(ctx.currentPlayer)) {
                G.players[ctx.currentPlayer].bet = { x, y };
                console.log(`Bet placed for player ${ctx.currentPlayer}:`, G.players[ctx.currentPlayer].bet);
            } else {
                // Log an error if the player object is not found
                console.error('Undefined player object', ctx.currentPlayer, G.players);
            }
        },

        chickenPoop: (G) => {
            let x = Math.floor(Math.random() * GRID_SIZE);
            let y = Math.floor(Math.random() * GRID_SIZE);
            console.log("chickenPoop called. Chicken position:", x, y);
            G.chickenPosition = { x, y };
        }
    },

    endIf: (G, ctx) => {
        if (G.chickenPosition) {
            for (let playerID in G.players) {
                if (G.players[playerID].bet && 
                    G.players[playerID].bet.x === G.chickenPosition.x && 
                    G.players[playerID].bet.y === G.chickenPosition.y) {
                    return { winner: playerID };
                }
            }
            return { draw: true };
        }
    },

    turn: {
        stages: {
            betting: {
                moves: { 
                    placeBet: (G, ctx, x, y) => {
                        G.players[ctx.currentPlayer].bet = { x, y };
                    }
                }, 
            }
        }
    },
};

export default ChickenBingo;