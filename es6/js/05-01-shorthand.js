let firstName = 'thiago';
let lastName =  'silva';
let age =       33;

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age
}
// o shorthand properties do ES6 permite que: se a propriedade e a variavel tiverem o mesmo nome, basta deixar apenas a variavel

const personShorthand = {
    firstName,
    lastName,
    age,
    hello(){
        console.log('oi');
    }
}
console.log(person);
personShorthand.hello()