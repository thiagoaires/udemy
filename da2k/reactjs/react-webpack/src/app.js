'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Thiago Aires',
        repos: 12,
        followers: 1,
        following: 1
      },
      repos: [{
        name: 'repo',
        link: '#'
      }],
      starred: [{
        name: 'repo',
        link: '#'
      }]
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}
export default App
