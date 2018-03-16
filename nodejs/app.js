let express = require('express');
let msg = require('./mod_teste')();
let app = express();

//informar ao express que o modulode view eh o ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home/index'));


app.get('/formulario_inclusao_noticia', (req, res) => res.render('admin/form_add_noticia.ejs'));

app.get('/noticias', (req, res) => res.render('noticias/noticias'))

app.listen(3000, () => {

    console.log(msg);
});