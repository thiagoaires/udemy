import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App'

import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import reducers from './components/reducers'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Welcome} />
        <Route path='/registro' component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)