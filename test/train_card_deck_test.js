import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { CarCardsDeck } from "../src/train_car_card_deck.js";

describe("train car card deck", () => {
  it("open face up cards deck", () => {
    const deck = [
      "white",
      "orange",
      "blue",
      "green",
      "white",
      "blue",
      "green",
      "orange",
    ];
    const trainCardDeck = new CarCardsDeck(deck);

    assertEquals(trainCardDeck.faceUp, deck.slice(0, 5));
    assertEquals(trainCardDeck.faceDown, deck.slice(5));
  });
});
