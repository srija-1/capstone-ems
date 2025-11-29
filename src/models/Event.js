// src/models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  organizer: String
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
