const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const routes = require('./routes/routes.js');

const app = express();
const appPort = 5500;
const mySqlPort = 3306;

app.set('port', appPort);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.engine('.hbs', engine({ extname: '.hbs' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: mySqlPort,
    database: 'fast_bite'
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use('/', routes);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(app.get('port'), () => {
    console.log('listening on port:', app.get('port'));
});
