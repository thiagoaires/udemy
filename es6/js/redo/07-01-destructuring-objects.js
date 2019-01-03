var data ={
    nome: 'thiago',
    sobrenome: 'aires',
    idade: 33,
    blog: 'http://www.google.com',
    social: {
        twitter: '@jqteixeira',
        facebook: '/joaquim_pensamentos'
    }
};

// const name = data.nome;
// const surname = data.sobrenome;
// const twitter = data.social.twitter;

// console.log(name);
// console.log(surname);
// console.log(twitter);

const {nome, sobrenome} = data;

console.log(nome);
console.log(sobrenome);

const {facebook, twitter} = data.social;

console.log(facebook);
console.log(twitter);

const {facebook:fb} = data.social;

console.log(fb);

const {cidade = 'macapa', idade = 25} = data;

console.log(cidade)
console.log(idade)