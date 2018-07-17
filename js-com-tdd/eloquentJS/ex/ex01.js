/**
 * http://braziljs.github.io/eloquente-javascript/chapters/estrutura-do-programa/
 * Criando um Triângulo com Loop
 * Escreva um programa que faça 7 chamadas a console.log() para retornar o seguinte triângulo.
 */

  function triaguloSharp(valor){
    let sharp = []
    for(i = 0; i < valor ;i++){
      sharp.push('#')
      console.log(sharp.join(''))
    }
  }
triaguloSharp(7)