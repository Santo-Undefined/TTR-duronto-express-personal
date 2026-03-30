export class CarCardsDeck {
  constructor(deck) {
    this.faceUp = [];
    this.faceDown = deck;
    this.#initFaceUp();
    this.discardPile = [];
  }

  #initFaceUp() {
    const faceUpCards = this.faceDown.slice(0, 5);

    this.faceDown = this.faceDown.slice(5);
    this.faceUp = faceUpCards;
  }
}
