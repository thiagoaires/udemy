import { combineReducers } from 'redux'
import auth from './auth'
import groups from './groups'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth,
  groups,
  form: formReducer
})