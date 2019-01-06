// import * as R from 'ramda'
import { uniq, union} from 'ramda'

const arr1 = [1, 2, 3, 4, 5, 6, 76,5, 4, 1]
const arr2 = [1, 4, 5, 6, 1, 40, 22, 12]

const arr3 = union(arr1, arr2)

const arr4 = uniq(arr1)

console.log(arr3, arr4)