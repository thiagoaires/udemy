import * as R from 'ramda'

const arr1 = [1, 2, 3, 4, 5, 6, 7,6, 6, 1]
const arr2 = [1, 2, 3, 4, 5, 6, 7,6, 6, 1]

const arr3 = R.union(arr1, arr2)

console.log(arr3)