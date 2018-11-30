import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Signout extends Component{

  componentDidMount(){
    this.props.signout(() => this.props.history.push('/login'))
  }

  render(){
    return(
      <div>
        Voce esta deslogado
      </div>
    )
  }
}

export default connect(null, actions)(Signout)