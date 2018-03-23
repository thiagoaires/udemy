class UsuariosDAO{

    constructor(connection){

        this._connection = connection;
    }

    inserirUsuario(usuario){
        this._connection.open((erros, mongoclient) => {
            mongoclient.collection('usuarios', (erros, collection) => {
                collection.insert(usuario);
            })
        });
        console.log(usuario);
    }
};

module.exports = () => UsuariosDAO;