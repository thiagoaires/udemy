'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'valor inicial',
      checked: false
    }
  }
  render () {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value}
            onChange={(e) => {
              this.setState({value: e.target.value})
            }} />
          <label>
            <input
              type='checkbox'
              value='my-checkbox'
              checked={this.state.checked}
              onChange={(e) => {
                this.setState({checked: e.target.checked})
              }} />
            checkbox
          </label>
          <label>
            <input type='radio' name='radio' value='radio1' /> radio 1
            <input type='radio' name='radio' value='radio2' /> radio 2
          </label>
        </form>
      </div>
    )
  }
}

export default App
