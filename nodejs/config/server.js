let express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    app = express();

app.set('view engine', 'ejs'); //informar ao express que o modulode view eh o ejs

app.set('views', './app/views'); //informar ao express localizacao das views

app.use(express.static('./app/public'))

app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());

// consign reconhece arquivos da pasta routes, faz um scan[consign().includes]..
//e pega todas essas informaçoes e inclui no nosso servidor(app)
consign().include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;