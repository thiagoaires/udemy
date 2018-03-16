let express = require('express');

let app = express();


app.set('view engine', 'ejs'); //informar ao express que o modulode view eh o ejs

app.set('views', './app/views'); //informar ao express localizacao das views

module.exports = app;