module.exports.noticias = (application, req, res) => {

    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((erros, resultados) => {

        res.render('noticias/noticias', {noticias: resultados});
    });

};

module.exports.noticia = (application, req, res) => {

    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);

    let id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, (erros, resultados) => {

        res.render('noticias/noticia', {noticia: resultados});
    });
};