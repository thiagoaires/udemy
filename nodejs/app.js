let express = require('express');
let app = express();

//informar ao express que o modulode view eh o ejs
app.set('view engine', 'ejs');

app.get('/tecnologia', (req, res) => res.render('secao/tecnologia') );

app.get('/', (req, res) => {

    res.send("<html><body>Portal Noticias</body></htnml>");
});

app.listen(3000, () =>{

    console.log('server ok');
});