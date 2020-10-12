/* eslint-disable no-unused-vars */
const router = require('express').Router()
const nodemailer = require('nodemailer')
const xoauth2 = require('xoauth2')
module.exports = router

// Define method for sending mail via nodemailer

const sendEmail = (email, message) => {
  let transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    //   port: 587,
    //   secure: false,
    service: 'google',
    auth: {
      xoauth2: xoauth2.CreateXOAuth2Generator({
        user: process.env.EMAILUSERNAME,
        // pass: process.env.EMAILPASSWORD,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN
      })
    }
    // sendMail: true,
    // tls: {
    //   ciphers: 'SSLv3'
    //   }
  })

  // verify SMTP
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take our messages!')
    }
  })

  const mail = {
    from: email,
    to: 'info@kali.nyc',
    message: 'FORM MAIL',
    text: message
  }

  transporter.sendMail(mail, (err, res) => {
    if (err) {
      console.log('failed on sendMail', err)
    } else {
      console.log('it works?')
      res.data({
        status: 200
      })
    }
  })
}

// create and send message
router.post('/msgs', async (req, res, next) => {
  let email = req.body.email
  let subject = 'Mail from FORM'
  let message = req.body.message
  let content = `email: ${email} \n message: ${message}`
  let mailData = await {
    email: email,
    subject: subject,
    message: message,
    content: content
  }
  try {
    sendEmail(email, message)
    res.send(mailData)
  } catch (error) {
    console.log('error during router.post', error)
  }
})
