import React from 'react'

import { shallow } from 'enzyme'

import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

const wrapped = shallow(<App />)

it('show a commentBox', () => {

  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('show a commentlist', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})