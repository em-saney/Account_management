// models/Income.js
module.exports = (sequelize, Sequelize) => {
    const Income = sequelize.define('income', {
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  
    return Income;
  };
  