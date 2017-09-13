const numeroSecreto = 8;

const thiago = {
    sobrenome: 'aires',
    idade: 33
}

console.log(thiago);

//congelar atributos do objeto, no caso thiago(const)
Object.freeze(thiago);

thiago.idade = 25;

console.log(thiago);