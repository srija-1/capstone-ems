const  express = require("express");
// const {createEvent} = require("../controllers/eventController");
// const {authMiddleware} = require("../middlewares/authMiddleware");
const { registerAttendee } = require("../controllers/attendeeController");

const router = express.Router();

router.post('/',registerAttendee);
// router.get("/,getEvents");

module.exports = router;
