let app = require('./config/server')


let rotaNoticias    = require('./app/routes/noticias')(app);
let rotaInclusao    = require('./app/routes/formulario_inclusao_noticia')(app);
let rotaHome        = require('./app/routes/home')(app);

app.listen(3000, () => {

    console.log('server ok');
});