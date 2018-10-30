import { AUTH_USER, AUTH_ERR } from './types'
import axios from 'axios'

const fixedProps = {
  "phone": "+55 11 1111-1111",
  "hashedPassword": "3F0ACE6838A5A130329C479EF1969B03B49E71F0CB866A5E3860CA73B1C062F1"
}

export const signup = (formProps, callback) => async (dispatch) => {

  const mixedProps = {}
  mixedProps['phone'] = formProps.email
  console.log('email', formProps.email)
  mixedProps['hashedPassword'] = fixedProps.hashedPassword

  try{
    const response = await axios.post('https://gruposocial-api.herokuapp.com/api/auth', mixedProps)
    console.log(mixedProps, response)
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