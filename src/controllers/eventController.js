const event = require('../models/Event');

const createEvent = async (req, res) => {
    const { title, description, date, location } = req.body;
    res.json({ message: 'Event created,event' });
}

 const getEvents = async (req, res) => {
    const events = await event.find();
    res.json(events);
};

module .exports = { createEvent,getEvents };