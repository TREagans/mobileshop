const express = require('express');
const morgan = require('morgan');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;
const api = process.env.API_URL;
const { connectDB } = require('./database');

// connect to DB
connectDB();

// middleware
app.use(express.json());
app.use(morgan('tiny'));

 
app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 3,
    name: 'ocean breeze',
    image: 'oceanbreeze.jpg'
  }

  // sending product to the client
  res.send(product);
});


app.post(`${api}/products`, (req, res) => {
  // creating new product from client data
  const newProduct = req.body

  // send product to the client
  res.send(newProduct);
});


// cb function will run when server is successfully running
app.listen(port, () => {
  console.log(`Server listening on port....${port}`);
});