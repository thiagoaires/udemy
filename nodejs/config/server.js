let express = require('express'),
    consign = require('consign'),
    app = express();



app.set('view engine', 'ejs'); //informar ao express que o modulode view eh o ejs

app.set('views', './app/views'); //informar ao express localizacao das views



// consign reconhece arquivos da pasta routes, faz um scan[consign().includes]..
//e pega todas essas informaçoes e inclui no nosso servidor(app)
consign().include('app/routes')
    .then('config/dbConnection.js')
    .into(app);
module.exports = app;