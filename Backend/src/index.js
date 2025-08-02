const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user.routes');
const ticketRoutes = require('./routes/ticket.routes');

app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);


app.use(errorHandler);

module.exports = app;