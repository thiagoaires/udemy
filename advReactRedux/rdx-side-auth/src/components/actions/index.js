import { AUTH_USER } from './types'
import axios from 'axios'
const fixedProps = {
  "phone": "+55 11 1111-1111",
  "hashedPassword": "3F0ACE6838A5A130329C479EF1969B03B49E71F0CB866A5E3860CA73B1C062F1"
}
export const signup = formProps => (dispatch) => {
  dispatch({
    type: AUTH_USER
  })


  axios.post('http://10.0.1.23:3000/api/auth', fixedProps)
    .then(res => res.data)
    .then(data => console.log(data))
}