const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const workouts = require('./routes/api/workouts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.log(err));

app.get('/', (req,res) => res.send('hello'));

// Use Routes
app.use('/api/users', users);
app.use('/api/workouts', workouts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));