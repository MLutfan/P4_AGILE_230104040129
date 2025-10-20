import request from "supertest";
import app from "../src/index";

describe("POST /orders", () => {
  it("should return 401 without token", async () => {
    const res = await request(app).post("/orders").send({ productId: "P1", quantity: 2 });
    expect(res.status).toBe(401);
  });

  it("should return 400 with invalid payload", async () => {
    const res = await request(app)
      .post("/orders")
      .set("Authorization", "Bearer test123")
      .send({ productId: "P1", quantity: 0 });
    expect(res.status).toBe(400);
  });

  it("should return 201 with valid payload", async () => {
    const res = await request(app)
      .post("/orders")
      .set("Authorization", "Bearer test123")
      .send({ productId: "P1", quantity: 2 });
    expect(res.status).toBe(201);
  });
});
