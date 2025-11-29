const attendee  = require('../models/Attendee');

const registerAttendee = async (req, res) => {
    const { name, email, eventId } = req.body;
    res.json({ message: 'Attendee registered,attendee' });
}

module.exports= {registerAttendee};