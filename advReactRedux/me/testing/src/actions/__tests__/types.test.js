import { SAVE_COMMENT } from 'actions/types'
import {saveComment} from 'actions'

describe('test actions', () => {
  it('correct type', () => {
    const action = saveComment()
    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('correct payload', () => {
    const action = saveComment('New comment')

    expect(action.payload).toEqual('New comment')
  })
})