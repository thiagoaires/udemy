import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'

import './components/styles/app.css'

import App from './components/App'

import Welcome from './components/Welcome'
import About from './components/About'
import Signup from './components/auth/Signup'
import Signout from './components/auth/Signout'
import Register from './components/auth/Register'
import Home from './components/Home'
import reducers from './components/reducers'
import reduxThunk from 'redux-thunk'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(
  reducers,
  {
    auth: {authenticated: localStorage.getItem('token')}
  },
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Signup} />
        <Route path='/logout' component={Signout} />
        <Route path='/registro' component={Register} />
        <Route path='/sobre' component={About} />
        <Route path='/home' component={Home} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)