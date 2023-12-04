const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Models
const Alumni = require('./models/Alumni');
const Subscriber = require('./models/Subscriber');

// Contact Form Endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  // Implement email sending logic using nodemailer
  res.status(200).send('Contact form received');
});

// Newsletter Sign Up Endpoint
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  const newSubscriber = new Subscriber({ email });
  await newSubscriber.save();
  res.status(200).send('Subscribed successfully');
});

// Alumni Data Submission Endpoint
app.post('/alumni', async (req, res) => {
  const { name, graduationYear, bio } = req.body;
  const newAlumni = new Alumni({ name, graduationYear, bio });
  await newAlumni.save();
  res.status(200).send('Alumni data saved');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
