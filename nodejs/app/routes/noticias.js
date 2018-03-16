// o modulo sera exportado como funcao, para que os comandos contidos no module exports sejam executados
// logo encapsula os comandos dentro de uma funcao

/*e mais importante, dentro do modulo, se utiliza a var app, que eh a inclusao do modulo server... que eh a implementaçao do express
e para que a informação de app seja utilizada dentro da funcao do app.js, a informação precisa ser recebida como parametro */

module.exports = (app) => app.get('/noticias', (req, res) => res.render('noticias/noticias'))