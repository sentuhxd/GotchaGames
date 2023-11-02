import { Client } from "boardgame.io/react";
import { chutesGame } from "../../chutesGame";
import { chutesBoard } from "../../chutesBoard";

const ChutesAndLadders = Client({ game: chutesGame, board: chutesBoard });

export default ChutesAndLadders;
