const express = require('express');


const location = require('./location');
const orders = require('./orders');
const meals = require('./meals');

const router = express.Router();
router.use('/', location, meals, orders);




module.exports = router;
