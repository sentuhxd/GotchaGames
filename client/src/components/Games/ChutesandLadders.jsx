import PropTypes from 'prop-types';
import { Client } from 'boardgame.io/react';

// ------------------------- Game Logic -------------------------

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

const ChutesAndLaddersGame = {
  setup: setup,
  moves: { rollDie: rollDie },
};

// ------------------------- Board Component -------------------------

export function ChutesAndLaddersBoard({ G, moves }) {
  const onClickRoll = () => moves.rollDie();

  const cellStyle = {
    border: '1px solid #555',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
  };

  let tbody = [];
  let counter = 0;

  for (let i = 0; i < 10; i++) {
    let cells = [];
    for (let j = 0; j < 10; j++) {
      const isPlayerHere = G.players['0'].position === counter;
      cells.push(
        <td key={counter} style={cellStyle}>
          {isPlayerHere ? 'P' : counter}
        </td>
      );

      counter++;
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div>
      <table id="board">
        <tbody>{tbody}</tbody>
      </table>
      <button onClick={onClickRoll}>Roll Die</button>
    </div>
  );
}

ChutesAndLaddersBoard.propTypes = {
  G: PropTypes.shape({
    players: PropTypes.object.isRequired,
  }).isRequired,
  moves: PropTypes.shape({
    rollDie: PropTypes.func,
  }).isRequired,
};

// ------------------------- Game Client -------------------------

const ChutesAndLaddersClient = Client({
  game: ChutesAndLaddersGame,
  board: ChutesAndLaddersBoard,
});

export default ChutesAndLaddersClient;
