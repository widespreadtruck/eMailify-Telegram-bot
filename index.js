require("dotenv").config()

const nodemailer = require("nodemailer")
const TelegramBot = require("node-telegram-bot-api")

// Initialize the eMailify bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true })

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.SENDER_EMAIL_USER,
    pass: process.env.SENDER_EMAIL_PASSWORD,
  },
})

// console.log("transporter", transporter)

// Listen for incoming messages
bot.on("message", (msg) => {
  // Handle incoming messages here
  console.log("msg full:", msg)
  console.log("msg:", msg.text)
  console.log("from:", msg.from.username)
  // Parse the message text and send an email
  const text = msg.text
  const from = msg.from.username
  const subject = "Telegram email"
  const to = process.env.RECEIVER_EMAIL_FULL_ADDRESS

  // Create the email message
  const mailOptions = {
    from: process.env.SENDER_EMAIL_FULL_ADDRESS,
    to: to,
    subject: subject,
    text: `Message from ${from}:\n\n${text}`,
  }

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
      bot.sendMessage(msg.chat.id, "An error occurred while sending the email")
    } else {
      console.log("Email sent: " + info.response)
      bot.sendMessage(msg.chat.id, "Email sent successfully!")
    }
  })
})
