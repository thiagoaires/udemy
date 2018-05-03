'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Thiago Aires',
        photo: 'https://avatars3.githubusercontent.com/u/625627?v=4',
        login: 'thiagoaires',
        repos: 12,
        followers: 1,
        following: 2
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
