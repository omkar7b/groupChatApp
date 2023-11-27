const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const User = require('./models/user');
const sequelize = require('./util/database');

const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json({extended: false}));
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
}));

app.use('/user',userRoutes);

sequelize.sync()
.then(() => {
    app.listen(3000);
    console.log('Server is running on port 3000');
})
.catch((err) => {
    console.log(err);
})
