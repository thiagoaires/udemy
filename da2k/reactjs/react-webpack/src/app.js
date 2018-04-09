'use strict'

import React, {Component} from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
  constructor () {
    super()
    this.state = {color: 'yellow'}
  }
  render () {
    return (
      <div className='container'>
        <Square color={this.state.color} />

        {
          ['red', 'green', 'blue'].map((color, indice) => (
            <Button
              key={indice}
              handleClick={() => this.setState({color})}>
              {color}
            </Button>
          ))
        }
      </div>
    )
  }
}

export default App
