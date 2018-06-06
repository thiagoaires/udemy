'use strict'

const counter = function(state = 0, action) {
  switch(action.type){
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }

  /*
  if (action.type === 'INCREMENT'){
    return state + 1
  } else if(action.type === 'DECREMENT'){
    return state -1
  }
  return state
  */
}


const { createStore } = Redux  
const store = createStore(counter)

store.subscribe(() => $counter.textContent = store.getState())

// store.subscribe(() => {
//   console.log('disparou açao:', store.getState())
// })

// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'DECREMENT'})
// store.dispatch({type: 'DAORA'})

const $counter  = document.querySelector('[data-js="counter"]')
const $decrement = document.querySelector('[data-js="decrement"]')
const $increment = document.querySelector('[data-js="increment"]')
$decrement.addEventListener('click', decrement)
$increment.addEventListener('click', increment)

function decrement(){
  store.dispatch({type: 'DECREMENT'})
}
function increment(){
  store.dispatch({type: 'INCREMENT'})
}