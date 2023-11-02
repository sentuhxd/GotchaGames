import PropTypes from 'prop-types';

const GRID_SIZE = 5;

const ChickenBingoBoard = (props) => {
    const { G, moves } = props;

    const handleCellClick = (x, y) => {
        if (G.card[x][y]) {
            moves.clearCell(x, y);
        } 
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_SIZE}, 60px)`, gap: '5px' }}>
            {G.card.map((row, x) => (
                row.map((cell, y) => (
                    <div 
                        key={`${x}-${y}`}
                        onClick={() => handleCellClick(x, y)}
                        style={{
                            width: '60px',
                            height: '60px',
                            border: '1px solid black',
                            backgroundColor: cell ? 'brown' : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        {cell ? "💩" : ""}
                    </div>
                ))
            ))}
        </div>
    );
};
ChickenBingoBoard.propTypes = {
    G: PropTypes.shape({
      card: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.bool)
      ).isRequired
    }).isRequired,
    moves: PropTypes.shape({
      clearCell: PropTypes.func.isRequired
    }).isRequired
  };
  
export default ChickenBingoBoard;
