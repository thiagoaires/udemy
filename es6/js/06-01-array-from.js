// const text = 'thiago';
// console.log(Array.from(text))

const list = document.querySelectorAll('#list li');
const listArray = Array.from(list);
console.log(listArray);

const names = listArray.map(name => name.textContent)
console.log(names)
