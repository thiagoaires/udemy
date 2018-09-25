import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'


let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('test if have button and textarea', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

describe('about textarea', () => {

  beforeEach(() => {

    wrapped.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    })
    wrapped.update()
  })

  it('textarea that users can type in it', () =>{

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('when form submitted, textarea gets empty', () => {

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
