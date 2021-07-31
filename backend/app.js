require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

//Cookies 
const cookieParser = require('cookie-parser');
const looger = require('morgan');

//Handlebars
const hbs = require('express-handlebars');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//tool for uses routes
app.use(cors());

//main route to get routes and methods
app.use('/api', require('./routes/index'));

//View engine setup
app.set('view engine', 'hbs');

//use engine for hbs
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'Layout', layoutsDir: __dirname + '/views/Layouts'}));
app.use(looger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;