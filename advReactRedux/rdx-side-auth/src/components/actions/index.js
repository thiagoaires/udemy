import { AUTH_USER, AUTH_ERR, AUTH_GROUPS, SET_USER } from './types'
import axios from 'axios'
import shajs from 'sha.js'

export const getUserLogged = () => async (dispatch) => {

  const token = localStorage.getItem('token')

  axios.defaults.headers.common['Authorization'] = token

  const user = await axios.get('https://gruposocial-api.herokuapp.com/api/customers')

  dispatch({
    type: SET_USER,
    payload: user.data
  })

}

export const loggedMenu = () => async (dispatch) => {

  const token = localStorage.getItem('token')

  axios.defaults.headers.common['Authorization'] = token

  console.log(token)

  const groups = await axios.get('https://gruposocial-api.herokuapp.com/api/groups')

  dispatch({
    type: AUTH_GROUPS,
    payload: groups.data
  })

}

export const signup = (formProps, callback) => async (dispatch) => {

  const mixedProps = {}

  mixedProps['hashedPassword'] = formProps.password === undefined ? '' : shajs('sha256').update(formProps.password).digest('hex').toUpperCase()
  mixedProps['phone'] = formProps.email

  try{

    const response = await axios.post('https://gruposocial-api.herokuapp.com/api/auth', mixedProps)

    axios.defaults.headers.common['Authorization'] = response.data.token

    localStorage.setItem('token', response.data.token)

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
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