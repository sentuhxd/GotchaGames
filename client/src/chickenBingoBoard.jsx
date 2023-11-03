import PropTypes from 'prop-types';
import { useState } from 'react';

const GRID_SIZE = 5;

const ChickenBingoBoard = ({ G, moves, ctx }) => {
    const [hoveredCell, setHoveredCell] = useState(null);
    console.log("State G:", G);
    console.log("Rendering ChickenBingoBoard", G, ctx);

    const handleCellClick = (x, y) => {
        moves.placeBet(x, y);
    };

    const currentPlayerCard = G.players[ctx.currentPlayer]?.card || [];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_SIZE}, 60px)`, gap: '5px' }}>
            {currentPlayerCard.map((row, x) => (
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
                            backgroundColor: cell ? 'brown' : hoveredCell?.x === x && hoveredCell?.y === y ? 'lightgray' : 'white',
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

// ChickenBingoBoard.propTypes = {
//     G: PropTypes.shape({
//         players: PropTypes.objectOf(
//             PropTypes.shape({
//                 card: PropTypes.arrayOf(
//                     PropTypes.arrayOf(PropTypes.bool)
//                 ).isRequired,
//             }).isRequired
//         ).isRequired
//     }).isRequired,
//     ctx: PropTypes.object.isRequired,
//     moves: PropTypes.shape({
//         placeBet: PropTypes.func.isRequired
//     }).isRequired
// };

export default ChickenBingoBoard;
