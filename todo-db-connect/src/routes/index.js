const router = require('express').Router();

const taskRoute = require('./api')
router.use('/tasks',taskRoute);

module.exports = router;