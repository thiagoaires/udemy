import { AUTH_USER, AUTH_ERR, AUTH_GROUPS } from './types'
import axios from 'axios'
import shajs from 'sha.js'

export const loggedMenu = (token) => async (dispatch) => {

  const headers = {
    'content-type': 'application/json',
    'authorization': token
  }

  const response = await axios.get('https://gruposocial-api.herokuapp.com/api/groups', headers)
  console.log(response)

  dispatch({
    type: AUTH_GROUPS,
    payload: response.data
  })

}

export const signup = (formProps, callback) => async (dispatch) => {

  const mixedProps = {}

  mixedProps['hashedPassword'] = formProps.password === undefined ? '' : shajs('sha256').update(formProps.password).digest('hex').toUpperCase()
  mixedProps['phone'] = formProps.email

  try{

    const response = await axios.post('https://gruposocial-api.herokuapp.com/api/auth', mixedProps)

    axios.defaults.headers.common['Authorization'] = response.data.token

    const groups = await axios.get('https://gruposocial-api.herokuapp.com/api/groups')

    localStorage.setItem('token', response.data.token)

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    })

    dispatch({
      type: AUTH_GROUPS,
      payload: groups.data
    })
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