const FormData = require('form-data');
const Mailgun = require('mailgun.js');
require('dotenv').config()

const express = require('express')
const cors = require('cors')

// Setup Mailgun client

const mailgun = new Mailgun(FormData);
const client = mailgun.client({username: 'api', key: process.env.MAILGUN_APIKEY}) // DON'T PASTE KEY, USE ENV

// Run Express app

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

// API route

app.post('/send-mail', (req, res) => {
    client.messages.create(process.env.MAILGUN_DOMAIN, {
        from: "postmaster@" + process.env.MAILGUN_DOMAIN,
        to: ["victorsaakes@gmail.com"],
        subject: 'Message from ' + req.body.name,
        text: "New message",
        html: '<div><p>Name: ' + req.body.name + '</p><br/><p>Email: ' + req.body.email + '</p><br/><p>Message: ' + req.body.message + '</p></div>'
    })
    .then(m => res.status(201).json(m))
    .catch(e => console.log('Error:', e))
})