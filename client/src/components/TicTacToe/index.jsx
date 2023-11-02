import { Client } from 'boardgame.io/react';
import { tttGame } from "../../tttGame";
import { tttBoard } from "../../tttBoard";

const TicTacToe = Client({ game: tttGame, board: tttBoard});



export default TicTacToe;
