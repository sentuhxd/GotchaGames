import PropTypes from 'prop-types';

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
  let counter = 0; // To track the cell number

  for (let i = 0; i < 10; i++) {
    let cells = [];
    for (let j = 0; j < 10; j++) {
      const isPlayerHere = G.players['0'].position === counter;

      cells.push(
        <td key={counter} style={cellStyle}>
          {isPlayerHere ? 'P' : counter}
          {/* You can also add visualization for ladders and chutes here */}
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
  ctx: PropTypes.shape({
    gameover: PropTypes.shape({
      winner: PropTypes.string,
    }),
  }).isRequired,
  G: PropTypes.shape({
    players: PropTypes.object.isRequired,
  }).isRequired,
  moves: PropTypes.shape({
    rollDie: PropTypes.func,
  }).isRequired,
};
