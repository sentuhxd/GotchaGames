import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import chuteImage from "../../assets/chutesboard.png";
import chickenBingoImage from "../../assets/Goliath-Chicken-Poo-Bingo-Game-Wind-up-Novelty-Chicken-Drops-Poos-on-Bingo-Game-Board_8a79b4b4-b9e3-42c4-b9c2-04e46a940781.38cd066746e9d04446499097d6265650 copy.jpg"
import tttImage from "../../assets/tictactoe.png";
import chessImage from "../../assets/chessimg.png";

function Games() {
  function showChutesGame() {
    if (Auth.loggedIn()) {
      return (
        <>
          <img src={chuteImage}></img>
          <p className="mx-1">
            <Link to="/Chutes">Play Game</Link>
          </p>
          <img src={tttImage}></img>
          <p className="mx-1">
            <Link to="/ttt">Play Game</Link>
          </p>
          <img src={chessImage}></img>
          <p className="mx-1">
            <Link to="/chess">Play Game</Link>
          </p>
        </>
        
        
      );
    } else {
      return (
        <>
          <img src={chuteImage}></img>
          <p className="mx-1">
            <Link to="/Signup">Sign up to play!</Link>
          </p>
          <img src={tttImage}></img>
          <p className="mx-1">
            <Link to="/Signup">Sign up to play!</Link>
          </p>
          <img src={chessImage}></img>
          <p className="mx-1">
            <Link to="/Signup">Sign up to play!</Link>
          </p>
        </>
      );
    }
  }

  function showChickenBingoGame() {
    if (Auth.loggedIn()) {
      return (
        <>
          <img src={chickenBingoImage}></img>
          <p className="mx-1">
            <Link to="/ChickenBingo">Play Game</Link>
          </p>
        </>
      );
    } else {
      return (
        <>
          <img src={chickenBingoImage}></img>
          <p className="mx-1">
            <Link to="/Signup">Sign up to play!</Link>
          </p>
        </>
      );
    }
  }

  return (
    <>
      <nav>
        {showChutesGame()}
        {showChickenBingoGame()} 
      </nav>
    </>
  );
}
export default Games;
