export const initializePlayerHandHandler = (context) => {
  console.log("Is this failing?");
  const game = context.get("game");
  game.initializePlayerHand();

  return context.json(game.playerHand());
};

export const initializeFaceUpDeckHandler = (context) => {
  const game = context.get("game");
  const faceUpCards = game.getFaceUpCards();

  return context.json(faceUpCards);
};
