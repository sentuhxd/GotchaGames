import die from "./assets/die.png";
import ladder from "./assets/longerladder.png";
import littleLadder from "./assets/ladder.png";
import shortersideladder from "./assets/shortersideladder.png";
import chute from "./assets/chute.png";
import longerchute from "./assets/longerchute.png";
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
    position: "relative",
  };
  const imageStyle = {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: "2",
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
            {G.cells[id]?.map((occupant, index) => (
              <img
                style={{
                  ...imageStyle,
                  top: 10 + Math.ceil(Math.random() * 5),
                  left: 10 + Math.ceil(Math.random() * 5),
                }}
                key={index}
                src={occupant}
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
  const tableStyle = {
    position: "relative",
  };
  const ladderOneStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "8%",
    marginTop: "8%",
  };
  const ladderTwoStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "29%",
    marginTop: "16%",
  };
  const ladderThreeStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "48%",
    marginTop: "23.25%",
  };
  const ladderFourStyle = {
    position: "absolute",
    zIndex: "1",
    width: "13%",
    marginLeft: "29%",
    marginTop: "3%",
    transform: "rotate(320deg)",
  };
  const ladderFiveStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "58%",
    marginTop: "4%",
    transform: "rotate(138deg)",
  };
  const ladderSixStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "40%",
    marginTop: "11%",
    transform: "rotate(138deg)",
  };
  const ladderSevenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "20%",
    marginTop: "18.5%",
    transform: "rotate(138deg)",
  };
  const ladderEightStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginTop: "26.4%",
    transform: "rotate(138deg)",
  };
  const ladderNineStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "52%",
    marginTop: "30%",
    transform: "rotate(99deg)",
  };
  const ladderTenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "41%",
    marginTop: "49%",
    transform: "rotate(99deg)",
  };
  const ladderElevenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "30%",
    marginTop: "68%",
    transform: "rotate(99deg)",
  };
  const ladderTwelveStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "-4%",
    marginTop: "28%",
    transform: "rotate(38deg)",
  };
  const ladderThirteenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "28%",
    marginTop: "35%",
    transform: "rotate(125deg)",
  };
  const ladderFourteenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "7%",
    marginTop: "54%",
    transform: "rotate(-10deg)",
  };
  const ladderFifteenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "27%",
    marginTop: "58%",
    transform: "rotate(-10deg)",
  };
  const ladderSixteenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "25%",
    marginLeft: "47%",
    marginTop: "62%",
    transform: "rotate(-10deg)",
  };
  const ladderSeventeenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "15%",
    marginTop: "68%",
    transform: "rotate(320deg)",
  };
  const ladderEighteenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "15%",
    marginLeft: "87%",
    marginTop: "78%",
    transform: "rotate(320deg)",
  };
  const chuteOneStyle = {
    position: "absolute",
    zIndex: "1",
    width: "15%",
    transform: "rotate(99deg)",
    marginLeft: "70%",
    marginTop: "80%",
  };
  const chuteTwoStyle = {
    position: "absolute",
    zIndex: "1",
    width: "15%",
    transform: "rotate(99deg)",
    marginLeft: "40%",
    marginTop: "80%",
  };
  const chuteThreeStyle = {
    position: "absolute",
    zIndex: "1",
    width: "15%",
    transform: "rotate(99deg)",
    marginLeft: "20%",
    marginTop: "80%",
  };
  const chuteFourStyle = {
    position: "absolute",
    zIndex: "1",
    width: "19%",
    transform: "rotate(49deg)",
    marginLeft: "49%",
    marginTop: "67%",
  };
  const chuteFiveStyle = {
    position: "absolute",
    zIndex: "1",
    width: "19%",
    transform: "rotate(49deg)",
    marginLeft: "42%",
    marginTop: "52%",
  };
  const chuteSixStyle = {
    position: "absolute",
    zIndex: "1",
    width: "19%",
    transform: "rotate(49deg)",
    marginLeft: "35%",
    marginTop: "38%",
  };
  const chuteSevenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "19%",
    transform: "rotate(49deg)",
    marginLeft: "30%",
    marginTop: "28%",
  };
  const chuteEightStyle = {
    position: "absolute",
    zIndex: "1",
    width: "12%",
    transform: "rotate(90deg)",
    marginLeft: "50%",
    marginTop: "8%",
  };
  const chuteNineStyle = {
    position: "absolute",
    zIndex: "1",
    width: "15%",
    transform: "rotate(45deg)",
    marginLeft: "52%",
    marginTop: "30%",
  };
  const chuteTenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "17%",
    marginLeft: "38%",
    marginTop: "52%",
  };
  const chuteElevenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "17%",
    marginLeft: "76.5%",
    marginTop: "29%",
    transform: "rotate(100deg)",
  };
  const chuteTwelveStyle = {
    position: "absolute",
    zIndex: "1",
    width: "18%",
    marginLeft: "83%",
    marginTop: "13%",
    transform: "rotate(100deg)",
  };
  const chuteThirteenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "18%",
    marginLeft: "5%",
    marginTop: "47%",
    transform: "rotate(90deg)",
  };
  const chuteFourteenStyle = {
    position: "absolute",
    zIndex: "1",
    width: "18%",
    marginLeft: "10%",
    marginTop: "30%",
    transform: "rotate(90deg)",
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={onClick} style={buttonStyle}>
          <img src={die} style={dieStyle}></img>
        </button>
        <p>Die roll: {G.dieRoll}</p>
      </div>

      <table id="board" style={tableStyle}>
        <img src={ladder} style={ladderOneStyle}></img>
        <img src={ladder} style={ladderTwoStyle}></img>
        <img src={ladder} style={ladderThreeStyle}></img>
        <img src={littleLadder} style={ladderFourStyle}></img>
        <img src={ladder} style={ladderFiveStyle}></img>
        <img src={ladder} style={ladderSixStyle}></img>
        <img src={ladder} style={ladderSevenStyle}></img>
        <img src={shortersideladder} style={ladderEightStyle}></img>
        <img src={ladder} style={ladderNineStyle}></img>
        <img src={ladder} style={ladderTenStyle}></img>
        <img src={ladder} style={ladderElevenStyle}></img>
        <img src={ladder} style={ladderTwelveStyle}></img>
        <img src={shortersideladder} style={ladderThirteenStyle}></img>
        <img src={ladder} style={ladderFourteenStyle}></img>
        <img src={ladder} style={ladderFifteenStyle}></img>
        <img src={shortersideladder} style={ladderSixteenStyle}></img>
        <img src={littleLadder} style={ladderSeventeenStyle}></img>
        <img src={littleLadder} style={ladderEighteenStyle}></img>
        <img src={chute} style={chuteOneStyle}></img>
        <img src={chute} style={chuteTwoStyle}></img>
        <img src={chute} style={chuteThreeStyle}></img>
        <img src={longerchute} style={chuteFourStyle}></img>
        <img src={longerchute} style={chuteFiveStyle}></img>
        <img src={longerchute} style={chuteSixStyle}></img>
        <img src={longerchute} style={chuteSevenStyle}></img>
        <img src={chute} style={chuteEightStyle}></img>
        <img src={longerchute} style={chuteNineStyle}></img>
        <img src={longerchute} style={chuteTenStyle}></img>
        <img src={longerchute} style={chuteElevenStyle}></img>
        <img src={longerchute} style={chuteTwelveStyle}></img>
        <img src={longerchute} style={chuteThirteenStyle}></img>
        <img src={longerchute} style={chuteFourteenStyle}></img>
        <tbody>{tbody}</tbody>
      </table>
      {winner}
    </div>
  );
}
