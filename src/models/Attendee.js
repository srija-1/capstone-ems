
const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  user:String ,
  event: String
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;
