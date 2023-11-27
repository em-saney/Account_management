// controllers/expenseController.js
const db = require('../models');

const Expense = db.Expense;

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addExpense = async (req, res) => {
  const { amount } = req.body;

  try {
    const newExpense = await Expense.create({ amount });
    res.json({ message: 'Expense added successfully', expense: newExpense });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateExpense = async (req, res) => {
  const { id, amount } = req.body;

  try {
    const updatedExpense = await Expense.update({ amount }, { where: { id } });
    res.json({ message: 'Expense updated successfully', expense: updatedExpense });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getExpenseSum = async (req, res) => {
  try {
    const sumResult = await Expense.findAll({
      attributes: [[db.sequelize.fn('SUM', db.sequelize.col('amount')), 'total']],
    });
    const sum = sumResult[0].dataValues.total || 0;
    res.json({ sum });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getExpenses,
  addExpense,
  updateExpense,
  getExpenseSum,
};
