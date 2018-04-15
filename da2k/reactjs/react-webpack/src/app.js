'use strict'

import React, {Component} from 'react'
import Timer from './timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
    console.log('constructor App')
  }

  componentDidMount () {
    console.log('componentDidMount App')
  }

  render () {
    console.log('render App')
    return (
      <div>
        <Timer time={this.state.time} />

        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change Props</button>
      </div>
    )
  }
}

export default App
