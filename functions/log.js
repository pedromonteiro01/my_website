const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const ip = event.headers['client-ip'];
  const timestamp = new Date().toISOString();

  // Configure nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // Send email
  let info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'New visitor on your website',
    text: `IP: ${ip}, Timestamp: ${timestamp}`
  });

  return {
    statusCode: 200,
    body: `Email sent: ${info.messageId}`
  };
};
