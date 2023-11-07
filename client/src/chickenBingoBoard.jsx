import React, { useState } from 'react';
import PropTypes from 'prop-types';
import chickenGif from './assets/Chicken_Feed_Light_Brown.gif';

const GRID_SIZE = 5;
const CELL_SIZE = 50; // cell size in pixels

const ChickenBingoBoard = ({ G, moves, ctx, events }) => {
    const [hoveredCell, setHoveredCell] = useState(null);
    
    // This function simulates the chicken moving and placing a bet
    const handleCellClick = (x, y) => {
        if (ctx.phase === 'betting') {
            moves.placeBet({ x, y });
            events.endTurn();
        }
    };

    // Generate the cell style based on game state
    const getCellStyle = (x, y) => {
        const isBetCell = G.players[ctx.currentPlayer]?.bet &&
                         G.players[ctx.currentPlayer].bet.x === x &&
                         G.players[ctx.currentPlayer].bet.y === y;
        const isPoopCell = G.chickenPosition && G.chickenPosition.x === x && G.chickenPosition.y === y;
        return {
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
            border: '1px solid black',
            backgroundColor: isPoopCell ? 'brown' :
                            isBetCell ? 'lightblue' :
                            hoveredCell?.x === x && hoveredCell?.y === y ? 'lightgray' : 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: ctx.phase === 'betting' ? 'pointer' : 'default',
            transition: 'background-color 0.2s'
        };
    };

    // Rendering cells with event handlers
    const renderCells = () =>
        Array.from({ length: GRID_SIZE }, (_, x) =>
            Array.from({ length: GRID_SIZE }, (_, y) => (
                <div
                    key={`${x}-${y}`}
                    style={getCellStyle(x, y)}
                    onClick={() => handleCellClick(x, y)}
                    onMouseEnter={() => setHoveredCell({ x, y })}
                    onMouseLeave={() => setHoveredCell(null)}>
                    {G.chickenPosition && G.chickenPosition.x === x && G.chickenPosition.y === y ? "💩" : ""}
                </div>
            ))
        );

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

    // Component layout with game elements
    return (
        <div style={{ maxWidth: '300px', margin: 'auto' }}>
            {renderGameOverMessage()}

            {/* Conditionally display the chicken GIF based on the game phase */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                {ctx.phase === 'betting' && (
                    <img src={chickenGif} alt="Animated chicken" style={{ pointerEvents: 'none', maxWidth: '100%' }} />
                )}
            </div>

            {/* The game board grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
                gap: '7px',
                background: '#f0f0f0',
                padding: '10px',
                border: '2px solid #ccc',
                borderRadius: '10px'
            }}>
                {renderCells()}
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
