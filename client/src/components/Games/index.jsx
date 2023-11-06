import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import chuteImage from "../../assets/chutesboard.png";
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
