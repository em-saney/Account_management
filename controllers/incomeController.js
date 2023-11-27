// controllers/incomeController.js
const db = require('../models');

const Income = db.Income;

const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.findAll();
    res.json(incomes);
  } catch (error) {0
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// controllers/incomeController.js
const addIncome = async (req, res) => {
  const { amount } = req.body;

  try {
    const newIncome = await Income.create({ amount });
    console.log('New Income added:', newIncome.toJSON()); // Log the new income
    res.json({ message: 'Income added successfully', income: newIncome });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateIncome = async (req, res) => {
  const { id, amount } = req.body;

  try {
    const updatedIncome = await Income.update({ amount }, { where: { id } });
    res.json({ message: 'Income updated successfully', income: updatedIncome });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getIncomeSum = async (req, res) => {
  try {
    const sumResult = await Income.findAll({
      attributes: [[db.sequelize.fn('SUM', db.sequelize.col('amount')), 'total']],
    });
    const sum = sumResult[0].dataValues.total || 0;
    res.json({ sum });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getIncomes,
  addIncome,
  updateIncome,
  getIncomeSum,
};