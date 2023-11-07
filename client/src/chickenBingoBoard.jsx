// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import chickenGif from './assets/Chicken_Feed_Light_Brown.gif';

// const GRID_SIZE = 5;

// const getChickenGifStyle = (bet) => {
//     if (!bet) return {};
  
//     // Calculate position based on the bet's coordinates
//     const top = bet.x * (60 + 5); // grid cell height + gap size
//     const left = bet.y * (60 + 5); // grid cell width + gap size
  
//     return {
//       position: 'absolute',
//       top: `${top}px`,
//       left: `${left}px`,
//       transition: 'top 0.5s, left 0.5s', // Smooth transition for moving the chicken
//     };
//   };

// const ChickenBingoBoard = ({ G, moves, ctx, events}) => {
//     const [hoveredCell, setHoveredCell] = useState(null);

//     const handleCellClick = (x, y) => {
//         moves.placeBet({x, y});
//         events.endTurn();
//     };

//     const currentPlayerCard = G.players[ctx.currentPlayer]?.card || [];
//     const currentPlayerBet = G.players[ctx.currentPlayer]?.bet;

//     // Function to render game over message
//     const renderGameOverMessage = () => {
//         if (ctx.gameover) {
//             return ctx.gameover.winner ? (
//                 <div>The winner is player {ctx.gameover.winner}!</div>
//             ) : (
//                 <div>It's a draw!</div>
//             );
//         }
//         return null;
//     };

//     return (
//         <div>
//             {/* Render game over message if applicable */}
//             {renderGameOverMessage()}

//             {/* Display the chicken GIF above the game board */}
//             <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                 <img src={chickenGif} alt="Animated chicken" />
//             </div>
    
//             {/* Game board grid */}
//             <div style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_SIZE}, 60px)`, gap: '5px' }}>
//                 {currentPlayerCard.map((row, x) => (
//                     row.map((cell, y) => {
//                         const isBetCell = currentPlayerBet && currentPlayerBet.x === x && currentPlayerBet.y === y;
//                         const isPoopCell = G.chickenPosition && G.chickenPosition.x === x && G.chickenPosition.y === y;
//                         const cellStyle = {
//                             width: '60px',
//                             height: '60px',
//                             border: '1px solid black',
//                             backgroundColor: isPoopCell ? 'brown' :
//                                             isBetCell ? 'blue' :
//                                             hoveredCell?.x === x && hoveredCell?.y === y ? 'lightgray' : 'white',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             cursor: ctx.phase === 'setup' ? 'pointer' : 'default',
//                             transition: 'background-color 0.2s'
//                         };
    
//                         return (
//                             <div 
//                                 key={`${x}-${y}`}
//                                 onClick={() => handleCellClick(x, y)}
//                                 onMouseEnter={() => setHoveredCell({ x, y })}
//                                 onMouseLeave={() => setHoveredCell(null)}
//                                 style={cellStyle}>
//                                 {isPoopCell ? "💩" : ""}
//                             </div>
//                         );
//                     })
//                 ))}
//             </div>
//         </div>
//     );
// };

// ChickenBingoBoard.propTypes = {
//     G: PropTypes.object.isRequired,
//     moves: PropTypes.objectOf(PropTypes.func).isRequired,
//     ctx: PropTypes.object.isRequired,
//     events: PropTypes.object
// };

// export default ChickenBingoBoard;
// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import chickenGif from './assets/Chicken_Feed_Light_Brown.gif';

// const GRID_SIZE = 5;
// const CELL_SIZE = 60; // cell size in pixels

// const ChickenBingoBoard = ({ G, moves, ctx, events }) => {
//     const [hoveredCell, setHoveredCell] = useState(null);
    
//     // This function simulates the chicken moving and placing a bet
//     const handleCellClick = (x, y) => {
//         if (ctx.phase === 'betting') {
//             moves.placeBet({ x, y });
//             events.endTurn();
//         }
//     };

//     // Generate the cell style based on game state
//     const getCellStyle = (x, y) => {
//         const isBetCell = G.players[ctx.currentPlayer]?.bet &&
//                          G.players[ctx.currentPlayer].bet.x === x &&
//                          G.players[ctx.currentPlayer].bet.y === y;
//         const isPoopCell = G.chickenPosition && G.chickenPosition.x === x && G.chickenPosition.y === y;
//         return {
//             width: `${CELL_SIZE}px`,
//             height: `${CELL_SIZE}px`,
//             border: '1px solid black',
//             backgroundColor: isPoopCell ? 'brown' :
//                             isBetCell ? 'lightblue' :
//                             hoveredCell?.x === x && hoveredCell?.y === y ? 'lightgray' : 'white',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             cursor: ctx.phase === 'betting' ? 'pointer' : 'default',
//             transition: 'background-color 0.2s'
//         };
//     };

//     // Rendering cells with event handlers
//     const renderCells = () =>
//         Array.from({ length: GRID_SIZE }, (_, x) =>
//             Array.from({ length: GRID_SIZE }, (_, y) => (
//                 <div
//                     key={`${x}-${y}`}
//                     style={getCellStyle(x, y)}
//                     onClick={() => handleCellClick(x, y)}
//                     onMouseEnter={() => setHoveredCell({ x, y })}
//                     onMouseLeave={() => setHoveredCell(null)}>
//                     {G.chickenPosition && G.chickenPosition.x === x && G.chickenPosition.y === y ? "💩" : ""}
//                 </div>
//             ))
//         );

//     // Function to render game over message
//     const renderGameOverMessage = () => {
//         if (ctx.gameover) {
//             return ctx.gameover.winner ? (
//                 <div>The winner is player {ctx.gameover.winner}!</div>
//             ) : (
//                 <div>It's a draw!</div>
//             );
//         }
//         return null;
//     };

//     // Component layout with game elements
//     return (
//         <div style={{ maxWidth: '300px', margin: 'auto' }}>
//             {renderGameOverMessage()}

//             {/* Conditionally display the chicken GIF based on the game phase */}
//             <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                 {ctx.phase === 'betting' && (
//                     <img src={chickenGif} alt="Animated chicken" style={{ pointerEvents: 'none', maxWidth: '100%' }} />
//                 )}
//             </div>

//             {/* The game board grid */}
//             <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
//                 gap: '5px',
//                 background: '#f0f0f0',
//                 padding: '10px',
//                 border: '2px solid #ccc',
//                 borderRadius: '10px'
//             }}>
//                 {renderCells()}
//             </div>
//         </div>
//     );
// };


// ChickenBingoBoard.propTypes = {
//     G: PropTypes.object.isRequired,
//     moves: PropTypes.objectOf(PropTypes.func).isRequired,
//     ctx: PropTypes.object.isRequired,
//     events: PropTypes.object
// };

// export default ChickenBingoBoard;
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
