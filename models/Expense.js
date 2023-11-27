// models/Expense.js
module.exports = (sequelize, Sequelize) => {
    const Expense = sequelize.define('expense', {
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  
    return Expense;
  };
  