const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.SERVER_PORT || 3001;

dotenv.config();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose model for messages
const Message = mongoose.model('Message', {
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
});
const yourEmailAddress = 'your.email@example.com';

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check if the user has sent a message in the past 24 hours
    const existingMessage = await Message.findOne({ email, timestamp: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } });
    if (existingMessage) {
      return res.status(400).json({ success: false, message: 'You can only send one message per day.' });
    }

    // If the user has not sent a message in the past 24 hours, save the new message
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for your message!',
      text: `Dear ${name},\n\nThank you for reaching out. We have received your message and will get back to you soon.\n\nBest regards,\n Prakash Chandra Sahoo`,
    };

    // Send email notification to you
    const adminMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.USER_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
