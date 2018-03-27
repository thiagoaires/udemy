/* importando mongodb */ 

const mongo = require('mongodb').MongoClient;
let assert = require('assert');
let url = 'mongodb://localhost:27017';
let dbName = 'got';


let connMongoDB = (dados) => {
    mongo.connect(url, (erros, cliente) => {
        assert.equal(null, erros);
        console.log(`Conectado ao server ${url} com sucesso`);
        const db = cliente.db(dbName);
        query(db, dados);
        cliente.close();
    });
}

let query = (db, dados) => {
    let collection = db.collection(dados.collection);
    switch(dados.operacao){
        case "inserir":
            collection.insertOne(dados.usuario, dados.callback)
            break;
        case "logar":
            collection.find(dados.usuario, dados.callback);
            break;
        default:
            break;
    }
}
module.exports = () => {
    return connMongoDB;
}
/*
######    
antigo connect com mongoDB, da versao 2.x.x
#######

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
}*/

