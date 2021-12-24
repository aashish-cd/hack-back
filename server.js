const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
//Routes
const items = require('./routes/api/items');
const ambulances = require('./routes/api/ambulances');
const doctor = require('./routes/api/doctors');
const users = require('./routes/api/users');
const stores = require('./routes/api/stores');
const carts = require('./routes/api/carts');
const orders = require('./routes/api/orders');

const app = express();

app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

const port = process.env.PORT || 5000;

//bodyparse middleware
app.use(bodyParser.json());

//cors
app.use(cors());

//useRoutes
app.use('/api/items', items);
app.use('/api/ambulances', ambulances);
app.use('/api/doctors', doctor);
app.use('/api/users', users);
app.use('/api/stores', stores);
app.use('/api/carts', carts);
app.use('/api/orders/', orders);

//static folder
app.use(express.static(__dirname + '/public'));

// connect database
mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`server started on port ${port}`));
