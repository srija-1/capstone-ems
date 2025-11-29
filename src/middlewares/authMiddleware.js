const jwt = require('jsonwebtoken');
const User = require('../models/User');

 const authMiddleware =  (req, res, next) => {
    const token= req.headers.authorization;
    if (!token) return res.json({message:"No token"});
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
}

module.exports = {authMiddleware};