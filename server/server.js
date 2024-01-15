const express = require('express');
const cors = require('cors');
const db = require('./db.json');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/items', (req, res) => {
  res.json(db);
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
      item.cart = Number(item.cart) + Number(req.body.quantity);
    }
  });
  res.send(db.items);
});
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
