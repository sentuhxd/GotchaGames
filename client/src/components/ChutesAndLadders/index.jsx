import { Client } from "boardgame.io/react";
import { ChutesGame } from "../../chutesGame";
import { ChutesBoard } from "../../chutesBoard";

const ChutesAndLadders = Client({ game: ChutesGame, board: ChutesBoard });

export default ChutesAndLadders;
