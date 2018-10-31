import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component{
  renderMenu(){
    if(!this.props.authenticated){
      return (
        <div>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/registro'>Registro</Link>
          <Link to='/sobre'>Sobre</Link>
        </div>
      )
    } else{
      return (
      <div className='header-logged'>
        <Link to='/home'>Grupo Social</Link>
        <Link to='/logout'>Sair</Link>
      </div>
      )
    }
  }
  render(){
    return(
      <nav>
        {
          this.renderMenu()
        }
      </nav>
    )
  }
}

function mapStateToProps(state){
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)