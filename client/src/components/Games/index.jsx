import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import chuteImage from "../../assets/chutesboard.png";

function Games() {
  function showGame() {
    if (Auth.loggedIn()) {
      return (
        <>
          <img src={chuteImage}></img>
          <p className="mx-1">
            <Link to="/client/src/pages/ChutesAndLaddersPage.jsx">Play Game</Link>
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
