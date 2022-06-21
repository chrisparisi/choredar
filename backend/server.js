const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const { sendFile } = require('express/lib/response');

const { errorHandler } = require('./middleware/errorMiddlerware');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/chores', require('./routes/choreRoutes'));

//Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
