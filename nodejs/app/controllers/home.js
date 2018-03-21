module.exports.index = (application, req, res) => {

    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(erros, resultados){

        res.render('home/index', {noticias: resultados});
    });
}