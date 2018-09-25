import React from 'react'

import { shallow } from 'enzyme'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />)
})

afterEach(() => {
  wrapped.unmount()
})

it('show a commentBox', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('show a commentlist', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})

