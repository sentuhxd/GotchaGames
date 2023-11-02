import PropTypes from 'prop-types';
import { useState } from 'react';
const GRID_SIZE = 5;

const ChickenBingoBoard = (props) => {
    const { G, moves, ctx } = props;
    const [hoveredCell, setHoveredCell] = useState(null);
    const handleCellClick = (x, y) => {
        moves.placeBet(x, y);
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_SIZE}, 60px)`, gap: '5px' }}>
            {G.players[ctx.currentPlayer].card.map((row, x) => (
                row.map((cell, y) => (
                    <div 
                        key={`${x}-${y}`}
                        onClick={() => handleCellClick(x, y)}
                        onMouseEnter={() => setHoveredCell({ x, y })}
                        onMouseLeave={() => setHoveredCell(null)}
                        style={{
                            width: '60px',
                            height: '60px',
                            border: '1px solid black',
                            backgroundColor: cell ? 'brown' : hoveredCell && hoveredCell.x === x && hoveredCell.y === y ? 'lightgray' : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s'
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
        players: PropTypes.objectOf(
            PropTypes.shape({
                card: PropTypes.arrayOf(
                    PropTypes.arrayOf(PropTypes.bool)
                ).isRequired,
                bet: PropTypes.shape({
                    x: PropTypes.number,
                    y: PropTypes.number
                })
            }).isRequired
        ).isRequired
    }).isRequired,
    ctx: PropTypes.object.isRequired,
    moves: PropTypes.shape({
        placeBet: PropTypes.func.isRequired
    }).isRequired
};
  
export default ChickenBingoBoard;
