import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

class Header extends Component{

  componentDidMount = () => {
    this.props.getUserLogged()
  }

  renderMenu(){
    const { userLogged } = this.props
    if(!this.props.authenticated){
      return (
        <React.Fragment>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/registro'>Registro</Link>
          <Link to='/sobre'>Sobre</Link>
        </React.Fragment>
      )
    } else{
      return (
      <div className='header-logged'>
        <div className='header-logged-menu'>
          <Link to='/home'>Grupo Social</Link>
          <Link to='/logout'>Sair</Link>
        </div>
        {
          typeof(userLogged) === 'object' &&
          <div className='header-logged-user'>
            {userLogged.name}
              <ul>
                <li>
                  {userLogged.email}
                </li>
                <li>
                  {userLogged.phone}
                </li>
              </ul>
          </div>
      }
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
  return {
    userLogged: state.auth.userLogged,
    authenticated: state.auth.authenticated
   }
}

export default connect(mapStateToProps, actions)(Header)