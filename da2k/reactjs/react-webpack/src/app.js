'use strict'

import React, {Component} from 'react'
import Timer from './timer'

class App extends Component {
  constructor () {
    console.log('constructor')
    super()
    this.state = {
      showTimer: true
    }
  }

  componentDidMount () {

  }

  render () {
    console.log('render')
    return (
      <div className='container'>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({showTimer: !this.state.showTimer})
        }}>show / hide timer</button>
      </div>
    )
  }
}

export default App
