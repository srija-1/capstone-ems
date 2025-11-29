const mongoose = require('mongoose');
require('dotenv').config();

 const appConfig = {
    appName:"Event Management System",
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/event-management',
}

module.exports = appConfig;