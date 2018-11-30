import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from './actions'


class VerticalMenu extends React.Component{

  componentDidMount = () => this.props.loggedMenu()

  render(){
    return(

      <React.Fragment>
        <input type='checkbox' id='hamburger' className='verticalMenuItem'/><label htmlFor="hamburger" className='hamburgerMenu'>☰</label>
        <div className='verticalMenu'>
          <nav>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            {
              this.props.listGroups && this.props.listGroups.map((dado, index) => (
                <li key={index}>
                  <input type='checkbox' id={`subHamburger${index}`} className='verticalSubMenuItem'/>
                  <label htmlFor={`subHamburger${index}`} className='subHamburgerMenu'>{dado.name}</label>
                  <ul className='verticalSubMenuItems'>
                      <li><Link to={`/home/dashboard/${dado._id}`}>Dashboard</Link></li>
                      <li><Link to={`/home/messages/${dado._id}`}>Mensagens</Link></li>
                      <li><Link to={`/home/events/${dado._id}`}>Eventos</Link></li>
                      <li><Link to={`/home/payment/${dado._id}`}>Cobranças</Link></li>
                      <li><Link to={`/home/subgroups/${dado._id}`}>Sub-grupos</Link></li>
                      <li><Link to={`/home/suggestion/${dado._id}`}>Sugestões</Link></li>
                  </ul>
                </li>
              ))
            }
          </nav>
        </div>
      </React.Fragment>

    )
  }

}


function mapStateToProps(state){
  return {
    listGroups: state.auth.listGroups,
    authenticated: state.auth.authenticated
   }
}

export default connect(mapStateToProps, actions)(VerticalMenu)