import { Client } from "boardgame.io/react";
import { Local } from 'boardgame.io/multiplayer';
import ChickenBingoGame from "../../chickenBingoGame";
import ChickenBingoBoard from "../../chickenBingoBoard";

const ChickenBingoClient = Client({
    game: ChickenBingoGame,
    board: ChickenBingoBoard,
    multiplayer: Local(),
    numPlayers: 2
});

export default ChickenBingoClient;
