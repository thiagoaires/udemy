let mysql = require('mysql');

let connMySQL = () => {
        console.log('conexao com bd');
        return connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portal_noticias'
        });
    };
    
module.exports = function(){
    console.log('o autoload carregou o modulo de conexao com o BD')
    return connMySQL;
};