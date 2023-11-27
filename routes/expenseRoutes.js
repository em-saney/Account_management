// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/', expenseController.getExpenses);
router.post('/', expenseController.addExpense);
router.put('/', expenseController.updateExpense);
router.get('/sum', expenseController.getExpenseSum);

module.exports = router;
