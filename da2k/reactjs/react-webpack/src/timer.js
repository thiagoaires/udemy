'use strict'

import React, {Component} from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.timer = 0
    console.log('constructor Timer')
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps Timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    //  console.log('shouldComponentUpdat0e Timer', this.state, nextState)
    return this.props.time !== nextProps.time
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate Timer', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate Timer', this.props, prevProps)
  }
  componentDidMount () {
    console.log('componentDidMount Timer')
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount (nextProps, nextState) {
    console.log('componentWillUnmount Timer')
    clearInterval(this.timer)
  }

  render () {
    console.log('render Timer')
    return (
      <div>Timer: {this.state.time}</div>
    )
  }
}

export default Timer
