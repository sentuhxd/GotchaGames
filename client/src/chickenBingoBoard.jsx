import PropTypes from 'prop-types';
import { useState } from 'react';
import chickenGif from './assets/Chicken_Feed_Light_Brown.gif';

const GRID_SIZE = 5;

const ChickenBingoBoard = ({ G, moves, ctx, events}) => {
    const [hoveredCell, setHoveredCell] = useState(null);

    const handleCellClick = (x, y) => {
        moves.placeBet({x, y});
        events.endTurn();
    };

    const currentPlayerCard = G.players[ctx.currentPlayer]?.card || [];
    const currentPlayerBet = G.players[ctx.currentPlayer]?.bet;

    // Function to render game over message
    const renderGameOverMessage = () => {
        if (ctx.gameover) {
            return ctx.gameover.winner ? (
                <div>The winner is player {ctx.gameover.winner}!</div>
            ) : (
                <div>It's a draw!</div>
            );
        }
        return null;
    };

    return (
        <div>
            {/* Render game over message if applicable */}
            {renderGameOverMessage()}

            {/* Display the chicken GIF above the game board */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={chickenGif} alt="Animated chicken" />
            </div>
    
            {/* Game board grid */}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_SIZE}, 60px)`, gap: '5px' }}>
                {currentPlayerCard.map((row, x) => (
                    row.map((cell, y) => {
                        const isBetCell = currentPlayerBet && currentPlayerBet.x === x && currentPlayerBet.y === y;
                        const isPoopCell = G.chickenPosition && G.chickenPosition.x === x && G.chickenPosition.y === y;
                        const cellStyle = {
                            width: '60px',
                            height: '60px',
                            border: '1px solid black',
                            backgroundColor: isPoopCell ? 'brown' :
                                            isBetCell ? 'blue' :
                                            hoveredCell?.x === x && hoveredCell?.y === y ? 'lightgray' : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: ctx.phase === 'setup' ? 'pointer' : 'default',
                            transition: 'background-color 0.2s'
                        };
    
                        return (
                            <div 
                                key={`${x}-${y}`}
                                onClick={() => handleCellClick(x, y)}
                                onMouseEnter={() => setHoveredCell({ x, y })}
                                onMouseLeave={() => setHoveredCell(null)}
                                style={cellStyle}>
                                {isPoopCell ? "💩" : ""}
                            </div>
                        );
                    })
                ))}
            </div>
        </div>
    );
};

ChickenBingoBoard.propTypes = {
    G: PropTypes.object.isRequired,
    moves: PropTypes.objectOf(PropTypes.func).isRequired,
    ctx: PropTypes.object.isRequired,
    events: PropTypes.object
};

export default ChickenBingoBoard;
