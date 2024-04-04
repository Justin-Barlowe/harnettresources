// GET api for getting all resources from the database.
// resourcesAPI.js

const express = require('express');
const router = express.Router();
const Guide = require('../models/agency');

router.get('/', async (req, res) => {
  try {
    const resources = await Guide.find();
    res.json(resources);
  } catch (err) {
    // Log the error for server-side debugging
    console.error("Error fetching resources:", err);
    // Send a generic error message to the client
    res.status(500).json({ message: "An error occurred while fetching resources." });
  }
});

module.exports = router;
