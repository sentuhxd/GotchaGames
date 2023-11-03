import { Client } from 'boardgame.io/react';
import { tttGame } from "../../tttGame";
import { tttBoard } from "../../tttBoard";
import { Local } from "boardgame.io/multiplayer"

const TicTacToeClient = Client({ 
    game: tttGame, 
    board: tttBoard,
    multiplayer: Local()
});

const Tictac = () => (
    <div>
      <TicTacToeClient playerID="0" />
      <TicTacToeClient playerID="1" />
    </div>
  );



export default Tictac;
