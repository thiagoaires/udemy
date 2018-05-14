import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <div>
    <Family lastName='Aires' >
      <Member name='Thiago' />
      <Member name='Leidy' />
      <Member name='Nina' />
      <Member name='Max' />
    </Family>
  </div>
, document.getElementById('app'))

