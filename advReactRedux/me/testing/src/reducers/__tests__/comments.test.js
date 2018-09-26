import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions from SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const newState = commentsReducer([], action)

  expect(newState).toEqual(['New Comment'])
})

it('handles unknown type action', () => {
  const newState = commentsReducer([], 21)

  expect(newState).toEqual([])
})