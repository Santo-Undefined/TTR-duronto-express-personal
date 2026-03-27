import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { createApp } from "../src/app.js";

describe("Simple test suite", () => {
  it("A simple test", () => {
    createApp();

    assertEquals(1, 1);
  });
});
