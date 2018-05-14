import React, {Component} from 'react'

export default class classComponent extends Component{
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <h2>{this.props.children}</h2>
      </div>
    )
  }
}