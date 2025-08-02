const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes');
const ticketRoutes = require('./routes/ticket.routes');
const messageRoutes = require('./routes/message.routes');
const categoryRoutes = require('./routes/category.routes');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/categories', categoryRoutes);




app.use(errorHandler);

module.exports = app;