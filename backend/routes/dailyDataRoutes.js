const express = require('express')
const goalsController = require('../controllers/dailyDataController')
const router = express.Router()

router.post('/create', goalsController.createDailyData);
router.post('/retrieve', goalsController.retrieveDailyData);
router.post('/update', goalsController.updateDailyData);
router.post('/delete', goalsController.deleteDailyData);

module.exports = router