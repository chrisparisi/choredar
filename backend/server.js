const express = require('express');
const dotenv = require('dotenv').config();

const { errorHandler } = require('./middleware/errorMiddlerware');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/chores', require('./routes/choreRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
