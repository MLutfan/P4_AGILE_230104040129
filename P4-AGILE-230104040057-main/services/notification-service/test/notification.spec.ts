import request from "supertest";
import app from "../src/index";

describe("GET /notifications", () => {
  it("should return 401 without token", async () => {
    const res = await request(app).get("/notifications");
    expect(res.status).toBe(401);
  });

  it("should return 200 with valid token", async () => {
    const res = await request(app)
      .get("/notifications")
      .set("Authorization", "Bearer test123");
    expect(res.status).toBe(200);
  });
});
