'use strict'

import React, {Component} from 'react'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Button>
          <i>Botao negrito</i>
        </Button>
      </div>
    )
  }
}

export default App
