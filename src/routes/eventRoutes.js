const  express = require("express");
const {createEvent,getEvents} = require("../controllers/eventController");
const {authMiddleware} = require("../middlewares/authMiddleware");
// const {getEvents} = require("../controllers/eventController");

const router = express.Router();

router.post('/attendees', authMiddleware, createEvent);
router.get('/getEvents', authMiddleware, getEvents);
// router.get('/',getEvents);


module.exports = router;