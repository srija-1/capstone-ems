const express = require("express");
 const authRoutes = require("./src/routes/authRoutes");
 const eventRoutes = require("./src/routes/eventRoutes");
 const  attendeeRoutes = require("./src/routes/attendeeRoutes");

const app = express();

 app.use(express.json());
 app.use("/api/v1/auth", authRoutes);
 app.use("/api/events", eventRoutes);
 app.use("/attendees", attendeeRoutes);

// Error Handling (Simplified)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error' });
});

module.exports = app;