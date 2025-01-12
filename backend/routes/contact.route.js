import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Configure the email transport using nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_USER, // Your email to receive the message
      subject: `New Message from ${name}`,
      text: `Name: ${name}
Email: ${email}
Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message. Please try again later." });
  }
});

export default router;
