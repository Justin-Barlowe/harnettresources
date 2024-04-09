// GET api for getting resources by category from the database.

const express = require('express');
const router = express.Router();
const Guide = require('../models/agency');


router.get('/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const resources = await Guide.find({ Category: category });
    res.json(resources);
  } catch (err) {
    // Log the error for server-side debugging
    console.error(`Error fetching resources for category ${category}:`, err);
    // Send a generic error message to the client
    res.status(500).json({ message: "An error occurred while fetching resources." });
  }
});

module.exports = router;
