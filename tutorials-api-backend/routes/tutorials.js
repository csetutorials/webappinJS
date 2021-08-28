const express = require('express');
const router = express.Router();
const tutorialsService = require('../services/tutorials-services');

/* GET courses. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await tutorialsService.getTutorials());
  } catch (err) {
    console.error(`Error while getting courses `, err.message);
    next(err);
  }
});

module.exports = router;
