let mysql = require('mysql');

let connMySQL = () => {
        return connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portal_noticias'
        });
    };
    
module.exports = function(){
    return connMySQL;
};