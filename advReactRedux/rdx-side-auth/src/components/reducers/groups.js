import { GET_GROUP, GET_GROUP_MEMBERS } from '../actions/types'

const initialState = {
  nameGroup: '',
  groupMembers: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_GROUP_MEMBERS:
      return {...state, groupMembers: action.payload}
    case GET_GROUP:
      return {...state, nameGroup: action.payload}
    default:
      return state
  }
}