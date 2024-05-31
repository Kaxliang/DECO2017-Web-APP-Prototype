const express = require('express')
const goalsController = require('../controllers/goalsController')
const router = express.Router()

router.post('/create', goalsController.createGoal);
router.post('/retrieve', goalsController.retrieveGoals);
router.post('/update', goalsController.updateGoal);
router.post('/delete', goalsController.deleteGoal);

module.exports = router