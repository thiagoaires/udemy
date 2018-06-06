console.assert(
  counter(0, {type: 'INCREMENT'}) === 1
)

console.assert(
  counter(1, {type: 'INCREMENT'}) === 2
)

console.assert(
  counter(6, {type: 'DECREMENT'}) === 5
)
console.assert(
  counter(5, {type: 'XYZ'}) === 5
)

console.assert(
  counter(undefined, {}) === 0
)