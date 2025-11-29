import { createEvent, getEvents } from "../../../controllers/eventController.js";
import Event from "../../../models/Event.js";

jest.mock("../../../models/Event.js"); // Mock the Event model

const mockReq = (body = {}) => ({ body });
const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Event Controller Unit Tests", () => {
  
  test("createEvent should create and return event", async () => {
    const req = mockReq({
      title: "Test Event",
      description: "Test Desc",
      date: "2025-01-01",
      location: "Test Location",
    });
    const res = mockRes();

    Event.create.mockResolvedValue({ id: 1, ...req.body });

    await createEvent(req, res);

    expect(Event.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Event created",
      event: { id: 1, ...req.body },
    });
  });

  test("getEvents should return all events", async () => {
    const req = {};
    const res = mockRes();

    const mockEventList = [
      { id: 1, title: "E1" },
      { id: 2, title: "E2" },
    ];

    Event.find.mockResolvedValue(mockEventList);

    await getEvents(req, res);

    expect(Event.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockEventList);
  });

});