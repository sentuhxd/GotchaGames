import { Client } from 'boardgame.io/react';
import { tttGame } from "../../tttGame";
import { tttBoard } from "../../tttBoard";
import { SocketIO } from "boardgame.io/multiplayer"

const TicTacToeClient = Client({ 
    game: tttGame, 
    board: tttBoard,
    multiplayer: SocketIO({ server: 'localhost:3002'}),
});

const TictacToe = () => (
    <div>
      <TicTacToeClient playerID="0" />
      <TicTacToeClient playerID="1" />
    </div>
  );



export default TictacToe;
