const request = require("supertest");
const app = require("../../../app.js");
const Event = require("../../../models/Event.js");
const { expect } = require("chai");
const sinon = require("sinon");

describe("GET /api/events", function() {
  let findStub;

  // Before each test, stub the Event.find method
  beforeEach(function() {
    findStub = sinon.stub(Event, "find");
  });

  // After each test, restore the stub to the original method
  afterEach(function() {
    findStub.restore();
  });

  it("should return a list of events", async function() {
    const mockEvents = [
      { id: 1, title: "Event A" },
      { id: 2, title: "Event B" }
    ];

    // Resolve the stubbed method with mock data
    findStub.resolves(mockEvents);

    // Make the GET request to the /api/events endpoint
    const res = await request(app).get("/api/events");

    // Assertions using Chai
    expect(res.status).to.equal(200);
    expect(res.body).to.have.lengthOf(2);
    expect(res.body[0]).to.have.property("id", 1);
    expect(res.body[1]).to.have.property("title", "Event B");
  });

  it("should return an empty list when no events are found", async function() {
    // Mocking an empty array
    findStub.resolves([]);

    // Make the GET request to the /api/events endpoint
    const res = await request(app).get("/api/events");

    // Assertions using Chai
    expect(res.status).to.equal(200);
    expect(res.body).to.have.lengthOf(0);
  });
});
