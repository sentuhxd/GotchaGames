import die from "./assets/die.png";
export function chutesBoard({ ctx, G, moves }) {
  const onClick = () => moves.rollDie();
  console.log(ctx);
  console.log(G);
  let winner = "";
  if (ctx.gameover) {
    winner =
      ctx.gameover.winner !== undefined ? (
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
      const currentPlayer = G.players[ctx.currentPlayer];
      cells.push(
        <td key={id}>
          <div style={cellStyle}>
            {[id + 1]}
            {G.cells[currentPlayer.position].map((occupant, index) => (
              <img
                style={{
                  ...imageStyle,
                  top: 10 + Math.ceil(Math.random() * 5),
                  left: 10 + Math.ceil(Math.random() * 5),
                }}
                key={index}
                src={occupant.piece}
              ></img>
            ))}
          </div>
        </td>
      );
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }
  const dieStyle = {
    maxHeight: "100%",
    maxWidth: "100%",
  };
  const buttonStyle = {
    maxHeight: "10%",
    maxWidth: "10%",
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={onClick} style={buttonStyle}>
          <img src={die} style={dieStyle}></img>
        </button>
        <p>Die roll: {G.dieRoll}</p>
      </div>

      <table id="board">
        <tbody>{tbody}</tbody>
      </table>
      {winner}
    </div>
  );
}
