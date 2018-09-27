import React from 'react'
import {mount} from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2', 'Comment 3']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

describe('Testing li comments', () => {
  it('render one LI por comment', () => {
    expect(wrapped.find('li').length).toEqual(3)
  })

  it('test li content', () => {
    console.log(wrapped.render().text())
  })
})