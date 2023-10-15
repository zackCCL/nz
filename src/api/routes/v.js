const express = require('express');
const v = require('../services/v');
const loggers = require('../loggers');
const router = new express.Router();


/**
 * Get version
 */
router.get('/', async (req, res, next) => {
  const options = {
  };
  loggers().debug('getVerson route');
  try {
    const result = await v.getVerson(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;
