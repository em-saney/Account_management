// app.js
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./models');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

const incomeRoutes = require('./routes/incomeRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
const PORT = 3000;

// Middleware

app.use(morgan('dev'));
app.use(loggerMiddleware);
app.use(bodyParser.json());

// Routes
app.use('/income', incomeRoutes);
app.use('/expense', expenseRoutes);

// Sync the database and start the server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
