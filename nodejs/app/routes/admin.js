module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia.ejs');
    });

    application.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;

        req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
        req.assert('resumo', 'Resumo obrigatorio').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor obrigatorio').notEmpty();
        req.assert('data_noticia','Data obrigatoria').notEmpty();
        req.assert('noticia', 'noticia obrigatoria').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render('admin/form_add_noticia')
            return;
        }

        let connection = application.config.dbConnection();
        let noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, (erros, resultados) => {

            res.redirect('/noticias')
        });

    });
};

