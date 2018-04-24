'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }
  render () {
    return (
      <div>
        <input 
          type='checkbox'
          checked={this.state.checked}
          onChange={() => {
            this.setState({
              checked: !this.state.checked
            }, () => {
              this.setState({showContent: this.state.checked})
            })
          }}
        /> mostrar conteudo
        {this.state.showContent && <div> olha eu aqui</div>}
      </div>
    )
  }
}

export default App
