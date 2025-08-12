import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../src/app.js";

describe("POST /api/v1/analisar", () => {
  it("deve retornar o sentimento da mensagem", async () => {
    const response = await request(app)
      .post("/api/v1/analisar")
      .send({ mensagem: "Estou muito feliz hoje!" })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("sentimento");
    expect(["Positivo", "Negativo", "Neutro"]).toContain(response.body.sentimento);
  });
});
