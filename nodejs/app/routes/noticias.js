// o modulo sera exportado como funcao, para que os comandos contidos no module exports sejam executados
// logo encapsula os comandos dentro de uma funcao

/*e mais importante, dentro do modulo, se utiliza a var app, que eh a inclusao do modulo server... que eh a implementaçao do express
e para que a informação de app seja utilizada dentro da funcao do app.js, a informação precisa ser recebida como parametro */


module.exports = (app) => {
    app.get('/noticias', (req, res) => {

        let mysql = require('mysql');

        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portal_noticias'
        });
        //feita a conexao, posso executar queries dentro do BD
       

        // a query sempre espera 2 coisas, SQL e a funcao de callback, 
        // que sempre espera 2 parametros, erro e resultado
        connection.query('select * from noticias', (erros, resultados) => {
            //res.send(resultados);


            //agora o mais importante, passar os resultados da query(que vem em JSON), para a view
            //para isso, usar a funcao .render(endereço da view, resultados da query){}
            res.render('noticias/noticias', {noticias: resultados});
        });

    

        }
    );
};