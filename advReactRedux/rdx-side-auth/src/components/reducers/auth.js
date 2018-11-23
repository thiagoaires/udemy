import { AUTH_USER, AUTH_ERR, AUTH_GROUPS, SET_USER } from '../actions/types'

const initialState = {
  authenticated: '',
  errorMessage: '',
  listGroups: '',
  userLogged: ''
}

export default function(state = initialState, action){
  switch (action.type){
    case AUTH_USER:
      return {...state, authenticated:  action.payload }
    case AUTH_ERR:
      return {...state, errorMessage:   action.payload }
    case AUTH_GROUPS:
      return {...state, listGroups:     action.payload }
    case SET_USER:
      return {...state, userLogged:     action.payload }
    default:
      return state
    }
}