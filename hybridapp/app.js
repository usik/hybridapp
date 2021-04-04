
const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');
const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app
});

//middleware settings
app.use(logger('dev'));
app.use(express.json()); //app.use(bodyParser.json()) deprecated
app.use(express.urlencoded({extended:false}));
app.get('/', (req,res) => {
    res.send('express start');
});

//Routing
app.use('/admin', admin);

app.listen( port, () => {
    console.log('Express listening on port', port);
});