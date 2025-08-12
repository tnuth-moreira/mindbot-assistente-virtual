import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../src/app.js";

describe("GET /", () => {
  it("deve responder com a mensagem de boas-vindas", async () => {
    const response = await request(app)
      .get("/")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    });
  });
});
