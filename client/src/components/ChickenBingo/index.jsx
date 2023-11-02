import { Client } from "boardgame.io/react";
import { SocketIO } from 'boardgame.io/multiplayer';
import ChickenBingoGame from "../../chickenBingoGame";
import ChickenBingoBoard from "../../chickenBingoBoard";

const ChickenBingoClient = Client({
    game: ChickenBingoGame,
    board: ChickenBingoBoard,
    multiplayer: SocketIO({ server: 'http://localhost:3000' }),  // Adjust the server URL if it's different
    numPlayers: 4
});

export default ChickenBingoClient;
