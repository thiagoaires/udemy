const sum = require('./sum')

console.assert(
  typeof sum === 'function',
  'sum deve ser uma funçao'
)

console.assert(
  sum(1, 2) === 3,
  'soma de 1 + 2 deve retonar 3'
)

console.assert(
  sum(2, 3) === 5,
  'soma de 2 + 3 deve retornar 5'
)

console.log('teste passou')