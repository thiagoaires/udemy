module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia.ejs');
    });

    application.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;

        let connection = application.config.dbConnection();
        let noticiasModel = application.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, (erros, resultados) => {

            res.redirect('/noticias')
        });

    });
};

