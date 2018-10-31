import { AUTH_USER, AUTH_ERR } from './types'
import axios from 'axios'
import shajs from 'sha.js'

export const signup = (formProps, callback) => async (dispatch) => {

  const mixedProps = {}

  mixedProps['hashedPassword'] = formProps.password === undefined ? '' : shajs('sha256').update(formProps.password).digest('hex').toUpperCase()
  mixedProps['phone'] = formProps.email

  console.log(mixedProps)
  try{

    const response = await axios.post('https://gruposocial-api.herokuapp.com/api/auth', mixedProps)

    dispatch({
      type: AUTH_USER,
      payload: response.data
    })

    localStorage.setItem('token', response.data)

    callback()

  } catch(e) {

    dispatch({
      type: AUTH_ERR,
      payload: e.response.data.details
    })

  }

}

export const signout = () => {

  localStorage.removeItem('token')

  return {
    type: AUTH_USER,
    payload: ''
  }

}