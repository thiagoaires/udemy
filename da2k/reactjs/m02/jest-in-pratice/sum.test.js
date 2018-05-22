'use strict'

import {expect} from 'chai'
import sum from './sum'

it('Sum should be a function',() => {
  expect(sum).to.be.a('function')
})

it('sum(1, 2) should be a 3', () => {
  expect(sum(1, 2)).to.be.equal(3)  
})