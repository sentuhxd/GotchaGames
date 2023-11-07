import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import chuteImage from "../../assets/chutesboard.png";
import chickenBingoImage from "../../assets/Goliath-Chicken-Poo-Bingo-Game-Wind-up-Novelty-Chicken-Drops-Poos-on-Bingo-Game-Board_8a79b4b4-b9e3-42c4-b9c2-04e46a940781.38cd066746e9d04446499097d6265650 copy.jpg"
import tttImage from "../../assets/tictactoe.png";
import chessImage from "../../assets/chessimg.png";
import { useQuery } from "@apollo/client";
import { QUERY_USER_COINS } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_COINS } from "../../utils/mutations";

function Games() {
  const [updateUser] = useMutation(UPDATE_USER_COINS);
  const { data, loading } = useQuery(QUERY_USER_COINS, {
    fetchPolicy: "no-cache",
  });

  const decreaseCoins = async (coins) => {
    const updatedUser = await updateUser({
      variables: { coins: coins - 1 },
    });
    console.log(updatedUser);
  };

  const coins = data?.user.coins;
  console.log("coins", coins);

  if (!loading && Auth.loggedIn() && coins > 0) {
    return (
      <>
        <img src={chuteImage}></img>
        <p className="mx-1">
          <Link onClick={() => decreaseCoins(coins)} to="/Chutes">
            Play Game
          </Link>
        </p>
        <img src={tttImage}></img>
        <p className="mx-1">
          <Link onClick={() => decreaseCoins(coins)} to="/ttt">
            Play Game
          </Link>
        </p>
        <img src={chessImage}></img>
        <p className="mx-1">
          <Link onClick={() => decreaseCoins(coins)} to="/chess">
            Play Game
          </Link>
        </p>
        <img src={chickenBingoImage}></img>
        <p className="mx-1">
          <Link onClick={() => decreaseCoins(coins)} to="/chickenbingo">
            Play Game
          </Link>
        </p>
      </>
    );
  } else if (!loading && coins === 0) {
    return (
      <>
        <img src={chuteImage}></img>
        <p className="mx-1">
          <Link to="/shop">Purchase coins to play!</Link>
        </p>
        <img src={tttImage}></img>
        <p className="mx-1">
          <Link to="/shop">Purchase coins to play!</Link>
        </p>
        <img src={chessImage}></img>
        <p className="mx-1">
          <Link to="/shop">Purchase coins to play!</Link>
        </p>
      </>
    );
  } else {
    return (
      <>
        <img src={chuteImage}></img>
        <p className="mx-1">
          <Link to="/signup">Sign up to play!</Link>
        </p>
        <img src={tttImage}></img>
        <p className="mx-1">
          <Link to="/signup">Sign up to play!</Link>
        </p>
        <img src={chessImage}></img>
        <p className="mx-1">
          <Link to="/signup">Sign up to play!</Link>
        </p>
      </>
    );
  }
}

export default Games;
