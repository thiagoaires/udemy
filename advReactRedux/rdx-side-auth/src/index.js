import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App'

import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'

import { createStore } from 'redux'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path='/' component={Welcome} />
      <Route path='/registro' component={Signup} />
    </App>
  </BrowserRouter>,
  document.querySelector('#root')
)