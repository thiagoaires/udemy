class UsuariosDAO{

    constructor(connection){
      
        this._connection = connection;
    };

    inserirUsuario(usuario, res){

        let dados = {
            operacao: 'inserir',
            usuario: usuario,
            collection: 'usuarios',
            callback: function(err, result){
                res.send("ok");
            }
        };

        this._connection(dados);
    };

    autenticar(usuario, res){
        let dados = {
            operacao: 'logar',
            usuario: usuario,
            collection: 'usuarios',
            callback: function(err, result){
                console.log('ok... TALVEZ OK');
                //res.send("ok");
            }
        };

        this._connection(dados);
    };
};

module.exports = () => UsuariosDAO;
