// import * as R from 'ramda'
import { uniq, union} from 'ramda'
import soma, {div, sub, mult, pi} from './utils'

const arr1 = [1, 2, 3, 4, 5, 6, 76,5, 4, 1]
const arr2 = [1, 4, 5, 6, 1, 40, 22, 12]

const arr3 = union(arr1, arr2)

const arr4 = uniq(arr1)

console.log(arr3, arr4)

console.log('soma', soma(2, 5))

console.log('dividir', div(4, 2))
console.log('mult', mult(3, 3))
console.log('subtrair', sub(4, 1))
console.log('pi', pi)