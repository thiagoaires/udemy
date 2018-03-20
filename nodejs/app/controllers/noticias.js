module.exports.noticias = (application, req, res) => {

    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias((erros, resultados) => {

        res.render('noticias/noticias', {noticias: resultados});
    });

};

module.exports.noticia = (application, req, res) => {

    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getNoticia((erros, resultados) => {

        res.render('noticias/noticia', {noticia: resultados});
    });
};