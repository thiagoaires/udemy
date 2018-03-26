module.exports.cadastro = (application, req, res) =>{
    res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = (application, req, res) => {
    //res.send('teste cadastrar');
    let dadosForm = req.body;

    req.assert('nome', 'nome nao pode ser vazio').notEmpty();
    req.assert('usuario', 'usuario nao pode ser vazio').notEmpty();
    req.assert('senha', 'campo senha nao pode ser vazio').notEmpty();
    req.assert('casa', 'radio vazia, seleciona uma casa').notEmpty();

    let erros = req.validationErrors();

    if (erros) {
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
        return;
    }

    let connection = application.config.dbConnection;
    
    let UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm, res);
    //res.send('sem erros')

};