import { AUTH_USER, AUTH_ERR, AUTH_GROUPS, AUTH_TOKEN, SET_USER, GET_GROUP, GET_GROUP_MEMBERS } from './types'
import axios from 'axios'

import { hashValue } from '../../helpers'


export const getUserLogged = () => async (dispatch) => {

  const token = localStorage.getItem('token')

  axios.defaults.headers.common['Authorization'] = token

  const user = await axios.get('https://gruposocial-api.herokuapp.com/api/customers')

  dispatch({
    type: SET_USER,
    payload: user.data
  })

}

// ### MENU LOGADO ###

export const loggedMenu = () => async (dispatch) => {

  const token = localStorage.getItem('token')

  axios.defaults.headers.common['Authorization'] = token

  const groups = await axios.get('https://gruposocial-api.herokuapp.com/api/groups')

  dispatch({
    type: AUTH_GROUPS,
    payload: groups.data
  })

}


// ### LOGIN ###

export const signup = (formProps, callback) => async (dispatch) => {

  const spreadProps = {...formProps}

  if (!!spreadProps.hashedPassword) {
    spreadProps.hashedPassword = spreadProps.hashedPassword.replace(spreadProps.hashedPassword, hashValue(spreadProps.hashedPassword))
  }

  try{

    const response = await axios.post('https://gruposocial-api.herokuapp.com/api/auth', spreadProps)

    axios.defaults.headers.common['Authorization'] = response.data.token

    localStorage.setItem('token', response.data.token)

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    })

    dispatch({
      type: AUTH_ERR,
      payload: ''
    })

    callback()

  } catch(e) {

    dispatch({
      type: AUTH_ERR,
      payload: e.response.data.details
    })

  }

}

export const validateToken = (formProps, callback) => async dispatch => {

  try{
    const idOnValidate = localStorage.getItem('lpx-validation-id')
    const response = await axios.get(`https://gruposocial-api.herokuapp.com/api/customers/verify/${idOnValidate}/${formProps.tokenValidation}`)

    callback()

    dispatch({
      type: AUTH_ERR,
      payload: 'User Validated'
    })

  }catch(e){

    dispatch({
      type: AUTH_ERR,
      payload: e.response.data.details
    })
  }

}

// ### Registro ###

export const signin = (formProps, callback) => async dispatch => {
  const spreadProps = {...formProps}

  if (!!spreadProps.hashedPassword) {
    spreadProps.hashedPassword = spreadProps.hashedPassword.replace(spreadProps.hashedPassword, hashValue(spreadProps.hashedPassword))
  }

  try{
    const response = await axios.post('https://gruposocial-api.herokuapp.com/api/customers', spreadProps)

    const tokenId = response.data._id

    localStorage.setItem('lpx-validation-id', tokenId)

    dispatch({
      type: AUTH_TOKEN,
      payload: response.data
    })

    callback()

  }catch(e){
    console.log(e)
  }

}

//  ### LOGOUT ###

export const signout = callback => {

  localStorage.removeItem('token')

  callback()

  return {
    type: AUTH_USER,
    payload: ''
  }
}

// ## dashboard

export const loadGroupMembers = (nameGroup, listGroupMembers) => dispatch => {

  dispatch({
    type: GET_GROUP,
    payload: nameGroup
  })

  dispatch({
    type: GET_GROUP_MEMBERS,
    payload: listGroupMembers
  })
}