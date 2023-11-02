import PropTypes from 'prop-types';

export function ChutesBoard({ G, moves, ctx }) {
    const onClickRoll = () => moves.rollDie();

    let winner = "";
    if (ctx.gameover) {
        winner = ctx.gameover.winner !== undefined ? (
            <div id="winner">Winner: {ctx.gameover.winner}</div>
        ) : (
            <div id="winner">Draw!</div>
        );
    }

    const cellStyle = {
        border: "1px solid black",
        width: "65px",
        height: "65px",
        lineHeight: "50px",
        textAlign: "center",
    };

    let tbody = [];
    for (let i = 0; i < 10; i++) {
        let cells = [];
        for (let j = 0; j < 10; j++) {
            const id = 10 * i + j;
            const isPlayerHere = G.players['0'].position === id;
            cells.push(
                <td key={id}>
                    <div style={cellStyle}>{isPlayerHere ? 'P' : id + 1}</div>
                </td>
            );
        }
        tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
        <div>
            <button onClick={onClickRoll}>Roll Die</button>
            <table id="board">
                <tbody>{tbody}</tbody>
            </table>
            {winner}
        </div>
    );
}

ChutesBoard.propTypes = {
    G: PropTypes.shape({
        players: PropTypes.object.isRequired,
    }).isRequired,
    moves: PropTypes.shape({
        rollDie: PropTypes.func,
    }).isRequired,
    ctx: PropTypes.object.isRequired,
};

export default ChutesBoard;
