import { createApp } from "./src/app.js";
import { CarCardsDeck } from "./src/train_car_card_deck.js";
import { shuffle } from "@std/random";

const initDeck = () => {
  const colors = [
    { color: "red", length: 12 },
    { color: "green", length: 12 },
    { color: "blue", length: 12 },
    { color: "pink", length: 12 },
    { color: "white", length: 12 },
    { color: "yellow", length: 12 },
    { color: "orange", length: 12 },
    { color: "black", length: 12 },
    { color: "wild", length: 14 },
  ];
  const deck = colors.flatMap(({ color, length }) =>
    Array.from({ length }, () => color)
  );
  const shuffledDeck = shuffle(deck);

  return shuffledDeck;
};

const main = () => {
  const deck = initDeck();
  const trainCardDeck = new CarCardsDeck(deck);
  const app = createApp(trainCardDeck);
  const port = Deno.env.get("PORT") || 8000;
  Deno.serve({ port }, app.fetch);
};

main();
