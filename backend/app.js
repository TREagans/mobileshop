const express = require('express');
const { Mongoose } = require('mongoose');
const morgan = require('morgan');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;
const api = process.env.API_URL;
const { connectDB } = require('./database');
const Product = require('./models/product');

// connect to DB
connectDB();

// middleware
app.use(express.json());
app.use(morgan('tiny'));


// bring in routes
const productRoutes = require('./routes/products');



app.use(`${api}/products`, productRoutes);


// cb function will run when server is successfully running
app.listen(port, () => {
  console.log(`Server listening on port....${port}`);
});