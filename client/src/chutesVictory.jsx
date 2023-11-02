function IsVictory(G, ctx) {
  let winning = G.players[ctx.currentPlayer].position;
  if (winning > 98) return true;
}

export default IsVictory;
