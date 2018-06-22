function sum(arr){

  if(arr[0] === null)
    return 0

  return arr + arr.slice(arr[0])
}

