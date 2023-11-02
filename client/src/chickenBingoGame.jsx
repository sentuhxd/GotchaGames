// chickenBingoGame.jsx

const GRID_SIZE = 5; // Assuming a 5x5 Bingo card

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

const checkVictory = (card) => {
    // Check rows and columns
    for (let i = 0; i < GRID_SIZE; i++) {
        if (card[i].every(cell => cell) || card.map(row => row[i]).every(cell => cell)) {
            return true;
        }
    }
    // Check diagonals
    if (card.map((row, index) => row[index]).every(cell => cell) ||
        card.map((row, index) => row[GRID_SIZE - 1 - index]).every(cell => cell)) {
            return true;
    }
    return false;
};

export const ChickenBingo = {
    setup: () => ({
        card: initializeCard(),
        chickenPosition: null,
        movesMade: 0,
    }),

    moves: {
        chickenPoop: (G) => {
            let x = Math.floor(Math.random() * GRID_SIZE);
            let y = Math.floor(Math.random() * GRID_SIZE);
            G.chickenPosition = { x, y };
            G.card[x][y] = true;
            G.movesMade += 1;
        },

        clearCell: (G, x, y) => {
            G.card[x][y] = false;
            G.movesMade += 1;
        }
    },

    endIf: (G, ctx) => {
        if (checkVictory(G.card)) {
            return { winner: "player" };
        }
        if (G.movesMade >= GRID_SIZE * GRID_SIZE) {
            return { draw: true };
        }
    },
};

export default ChickenBingo;
