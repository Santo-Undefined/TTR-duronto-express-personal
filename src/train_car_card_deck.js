export class CarCardsDeck {
  constructor(deck) {
    this.faceUp = [];
    this.faceDown = deck;
    this.discardPile = [];
  }

  initFaceUp() {
    const faceUpCards = this.faceDown.slice(0, 5);

    this.faceDown = this.faceDown.slice(5);
    this.faceUp = faceUpCards;
    if (this.#totalWildInFaceUp() >= 3) {
      this.initFaceUp();
    }
  }

  dealInitialCards() {
    const faceDownCards = this.faceDown.slice(0, 4);

    this.faceDown = this.faceDown.slice(4);

    return faceDownCards;
  }

  #refillFaceUp(id, card) {
    this.faceUp.splice(id, 0, card);
  }

  #totalWildInFaceUp() {
    return this.faceUp.filter((card) => card === "wild").length;
  }

  drawCardFromFaceUp(id) {
    const cardIndex = parseInt(id) - 1;

    const [drawnCard] = this.faceUp.splice(cardIndex, 1);
    const drawnCardFromDeck = this.faceDown.shift();

    this.#refillFaceUp(cardIndex, drawnCardFromDeck);
    if (this.#totalWildInFaceUp() >= 3) {
      this.initFaceUp();
    }
    return drawnCard;
  }

  drawCardFromDeck() {
    const drawnCard = this.faceDown.shift();

    return drawnCard;
  }
}
