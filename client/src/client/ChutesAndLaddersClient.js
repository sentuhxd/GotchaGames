import { Client } from 'boardgame.io/react';
import { ChutesAndLadders } from './ChutesAndLaddersGame'; // Assuming your game logic is exported from this file
import { ChutesAndLaddersBoard } from '../components/BoardGame'; // Assuming your board component is exported from this file

const ChutesAndLaddersClient = Client({
  game: ChutesAndLadders,
  board: ChutesAndLaddersBoard,
  // You can add other configurations like multiplayer, debug, etc. here
});

export default ChutesAndLaddersClient;
