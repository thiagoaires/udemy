/* importando mongodb */ 

let mongo = require('mongodb');

let connMongoDB = () => {
    console.log(`entrou no db`);
    let db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //string contendo o end do servidor
            27017, //porta do server do mongoDb
            {} // config adicionais do server
        ),
        {} //config adicionais do Db
    );

    return db;
}

module.exports = () => {
    return connMongoDB;
}