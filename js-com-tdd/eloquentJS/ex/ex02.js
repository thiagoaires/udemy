/**
 * http://braziljs.github.io/eloquente-javascript/chapters/estrutura-do-programa/
Escreva um programa que imprima (usando console.log()) todos os números de 1 a 100,
exceto que, para números divisíveis por 3, ele imprima Fizz ao invés do número, e para números divisíveis por 5 (e não 3), ele imprima Buzz.

Quando você tiver o programa funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis por ambos os números 3 e 5.
 */
function checkFB(valor){
  if (valor % 3 === 0 && valor % 5 === 0 ) {
    return 'FIZZBUZZ!!!!'
  } else if (valor % 3 === 0){
    return 'Fizz'
  } else if (valor % 5 === 0){
    return 'Buzz'
  } else {
    return valor
  }
}
function fizzBuzz(){
  for(i = 0; i <= 100 ;i++){
    console.log(checkFB(i))
  }
}
fizzBuzz()