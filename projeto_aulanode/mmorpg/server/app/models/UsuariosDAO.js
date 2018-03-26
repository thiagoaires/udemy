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
};

module.exports = () => UsuariosDAO;


/**
 * class visando connect com mongoDB 2.x.x, reconfigurando para mongo 3.0.x
 * guardado para historico
class UsuariosDAO{

   constructor(connection){

        this._connection = connection();
    }

    inserirUsuario(usuario){

        this._connection.open(function (erros, mongoclient){
            mongoclieint.collection("usuarios", function(erros, collection){
                collection.insert(usuario)
            });
        });
        console.log(usuario);
    };
};

module.exports = () => UsuariosDAO;
 */