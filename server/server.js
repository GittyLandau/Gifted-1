const express = require('express');
const cors = require('cors');
const db = require('./db.json');
require('dotenv').config();
const app = express();
const sgMail = require('@sendgrid/mail');
const { log } = require('console');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/api/items', (req, res) => {
  res.json(db);
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});
app.get('/api/item/:id', (req, res) => {
  const id = req.params.id;
  const item = db.items.find((item) => item.id == id);
  res.json(item);
});
// app.post('/api/item', (req, res) => {
//   const lastId = db.items[db.length - 1].id;
//   const newItem = { ...req.body, id: lastId + 1 };
//   db.items.push(newItem);
//   res.send(db.items);
// });

app.post('/api/cart', (req, res) => {
  db.items.forEach((item) => {
    if (Number(item.id) == Number(req.body.id)) {
      item.cart = Number(req.body.quantity);
    }
  });
  res.send(db.items);
});

// clear cart
app.delete('/cart', (req, res) => {
  db.items.forEach((item) => {
    item.cart = 0;
  });
  res.status(204).send('Cleared cart');
});
app.delete('/cart/:id', (req, res) => {
  const id = req.params.id;
  db.items.forEach((item) => {
    if (Number(item.id) == Number(id)) {
      item.cart = [];
    }
  });
  res.status(204).send('Removed from cart');
});
// mail
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to: 'gittylandau04@gmail.com', // Change to your recipient
    from: 'gittylandau04@gmail.com', // Change to your verified sender
    subject: subject,
    text: text,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).send('Error sending email');
  }
});
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
