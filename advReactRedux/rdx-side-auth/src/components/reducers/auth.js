const initialState = {
  authenticated: '',
  apiToken: '',
  errorMessage: ''
}

export default function(state = initialState, action){
  switch (action.type){
    case 'AUTH_USER':
      console.log(initialState)
      break
    default:
      return state
    }
}