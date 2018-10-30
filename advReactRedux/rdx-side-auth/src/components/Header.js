import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component{
  renderMenu(){
    if(!this.props.authenticated){
      return (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/registro'>Registro</Link>
          <Link to='/sobre'>Sobre</Link>
        </div>
      )
    } else{
      return (<Link to='/logout'>Sair</Link>)
    }
  }
  render(){
    return(
      <nav>
        <Link to='/'>Home</Link>
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