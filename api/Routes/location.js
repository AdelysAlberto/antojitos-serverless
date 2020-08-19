const express = require('express');
const { default: locationController } = require('../controllers/location.controller');

const router = express.Router();


router.get("/location", locationController.getLocation);

module.exports = router;