// routes/incomeRoutes.js
const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.get('/', incomeController.getIncomes);
router.post('/', incomeController.addIncome);
router.put('/', incomeController.updateIncome);
router.get('/sum', incomeController.getIncomeSum);

module.exports = router;
