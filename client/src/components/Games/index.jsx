import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import chuteImage from "../../assets/chutesboard.png";
import tttImage from "../../assets/tictactoe.png";

function Games() {
  function showGame() {
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
        </>
      );
    }
  }

  return (
    <>
      <nav>{showGame()}</nav>
    </>
  );
}

export default Games;
