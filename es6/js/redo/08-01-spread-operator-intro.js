let front   = ['react', 'vue', 'angular'];
let back    = ['python', 'ruby', 'nodejs'];


let fullStack = [...front, 'rxJS',...back];
console.log(fullStack)

// //no caso se eu quisesse add um novo valor entre o array front e back, eu teria que criar um array vazio primeiro
// let fullStack = [];

// fullStack = fullStack.concat(front);
// fullStack.push('rxJS');
// fullStack = fullStack.concat(back);

// console.log(fullStack);

//caso eu queria juntar os 2 arrays, usaria o metodo .concat()
// let fullStack = front.concat(back);

// console.log(fullStack)
// ... spread operator

// console.log([...'teste']);