const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const generateOTP = require('otp-generator');

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

// Define a mongoose model for email verification
const EmailVerification = mongoose.model('EmailVerification', {
  email: String,
  otp: String,
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

app.get('/', (req, res) => {
  res.json({ message: 'hello' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, otp } = req.body;

    // Check if the provided OTP matches the one stored in the database
    const verificationRecord = await EmailVerification.findOne({
      email,
      otp,
      timestamp: { $gte: new Date(Date.now() - 2 * 60 * 1000) }, // Adjust the time window as needed (2 minutes in this example)
    });

    if (!verificationRecord) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
    }

    // If the user has not sent a message in the past 24 hours, save the new message
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Remove the used OTP record from the database
    await EmailVerification.deleteOne({ email, otp });

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

app.post('/api/send-otp', async (req, res) => {
  try {
    const { email } = req.body;

    // Generate a 6-digit OTP
    const otp = generateOTP({ digits: 6, alphabets: false, upperCase: false, specialChars: false });

    // Save OTP in the database
    const verificationData = new EmailVerification({ email, otp });
    await verificationData.save();

    // Send OTP to user's email
    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Email Verification OTP',
      text: `Your OTP for email verification is: ${otp}`,
    };

    await transporter.sendMail(userMailOptions);

    res.status(200).json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
