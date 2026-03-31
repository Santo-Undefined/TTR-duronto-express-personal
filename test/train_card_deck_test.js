import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { CarCardsDeck } from "../src/train_car_card_deck.js";

describe("train car card deck", () => {
  it("initialize", () => {
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

    assertEquals(trainCardDeck.faceDown, deck);
  });

  it("deal 4 cards initially ", () => {
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

    assertEquals(trainCardDeck.dealInitialCards(), [
      "white",
      "orange",
      "blue",
      "green",
    ]);
    assertEquals(trainCardDeck.faceDown, ["white", "blue", "green", "orange"]);
  });

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
    trainCardDeck.initFaceUp();

    assertEquals(trainCardDeck.faceUp, [
      "white",
      "orange",
      "blue",
      "green",
      "white",
    ]);
    assertEquals(trainCardDeck.faceDown, ["blue", "green", "orange"]);
  });

  it("draw one card from faceup with index 1", () => {
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
    trainCardDeck.initFaceUp();
    assertEquals(trainCardDeck.faceUp, [
      "white",
      "orange",
      "blue",
      "green",
      "white",
    ]);
    assertEquals(trainCardDeck.faceDown, ["blue", "green", "orange"]);
    assertEquals(trainCardDeck.drawCardFromFaceUp("2"), "orange");
    assertEquals(trainCardDeck.faceUp, [
      "white",
      "blue",
      "blue",
      "green",
      "white",
    ]);
  });

  it("reopen faceup card when there are more than or equal to 3 wild cards ", () => {
    const deck = [
      "white",
      "wild",
      "wild",
      "black",
      "wild",
      "blue",
      "green",
      "orange",
      "white",
      "blue",
      "blue",
      "green",
      "white",
    ];

    const trainCardDeck = new CarCardsDeck(deck);
    trainCardDeck.initFaceUp();

    assertEquals(trainCardDeck.faceUp, [
      "blue",
      "green",
      "orange",
      "white",
      "blue",
    ]);
    assertEquals(trainCardDeck.faceDown, ["blue", "green", "white"]);
  });

  it("draw one card from faceup [check: the faceup wild >= 3]", () => {
    const deck = [
      "white",
      "orange",
      "wild",
      "green",
      "wild",
      "wild",
      "green",
      "orange",
      "green",
      "orange",
      "white",
      "blue",
      "blue",
      "green",
      "white",
    ];

    const trainCardDeck = new CarCardsDeck(deck);
    trainCardDeck.initFaceUp();
    assertEquals(trainCardDeck.faceUp, [
      "white",
      "orange",
      "wild",
      "green",
      "wild",
    ]);
    assertEquals(trainCardDeck.faceDown, [
      "wild",
      "green",
      "orange",
      "green",
      "orange",
      "white",
      "blue",
      "blue",
      "green",
      "white",
    ]);
    assertEquals(trainCardDeck.drawCardFromFaceUp("2"), "orange");
    assertEquals(trainCardDeck.faceUp, [
      "green",
      "orange",
      "green",
      "orange",
      "white",
    ]);
  });

  it("draw one card from deck", () => {
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
    trainCardDeck.initFaceUp();
    assertEquals(trainCardDeck.faceUp, [
      "white",
      "orange",
      "blue",
      "green",
      "white",
    ]);
    assertEquals(trainCardDeck.faceDown, ["blue", "green", "orange"]);
    assertEquals(trainCardDeck.drawCardFromDeck(), "blue");
  });
});
