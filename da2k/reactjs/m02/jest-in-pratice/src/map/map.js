'use strict'

const map = (arr = [], metodo = (item) => item) => {

  let arrayNovo = []

  for (let i = 0; i < arr.length; i++){
    arrayNovo.push(metodo(arr[i], i, arr[i]))
  }
  return arrayNovo
}

export default map