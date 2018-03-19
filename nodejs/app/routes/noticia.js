
module.exports = (application) => {


    application.get('/noticia', (req, res) => {

        let connection = application.config.dbConnection();
        let noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.getNoticia((erros, resultados) => {

            res.render('noticias/noticia', {noticia: resultados});
        });

    });
     
};