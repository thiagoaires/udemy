module.exports.index = (application, req, res) => {
    res.render('index', {validacao: {}});
};

module.exports.autenticar = (application, req, res) => {
    let dadosForm = req.body;

    req.assert('usuario', 'Usuario nao pode ser vazio').notEmpty();
    req.assert('senha', 'campo senha nao pode ser vazio').notEmpty();

    let erros = req.validationErrors();

    if (erros){
        res.render('index', {validacao: erros});
        console.log('erro');
        return
    }

    let connection = application.config.dbConnection;
    let UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.autenticar(dadosForm);
    console.log(res);
}