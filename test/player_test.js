import { beforeEach, describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import Player from "../src/player.js";

describe("testing player class methods", () => {
  let player;
  beforeEach(() => {
    player = new Player();
  });

  it("creating a new instance of player class should assign 45 bogies", () => {
    assertEquals(player.getPlayerHand().bogies, 45);
  });

  it("addCardToHand should add the given card to player Hand", () => {
    player.addCarCardToHand("red");

    assertEquals(player.getPlayerHand().carCards, { red: 1 });
  });

  it("addTicketChoices should add the given ticketChoices to player Hand", () => {
    player.addTicketChoices(["A-B", "B-C"]);

    assertEquals(player.getPlayerHand().ticketChoices, ["A-B", "B-C"]);
  });
});
