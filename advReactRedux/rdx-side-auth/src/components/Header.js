import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/registro'>Registro</Link>
        <Link to='/sobre'>Sobre</Link>
      </nav>
    )
  }
}

export default Header