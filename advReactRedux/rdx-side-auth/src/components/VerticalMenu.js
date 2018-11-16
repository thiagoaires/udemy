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
                      <li><Link to='/home/dashboard'>Dashboard</Link></li>
                      <li><Link to='/home/messages'>Mensagens</Link></li>
                      <li><Link to='/home/events'>Eventos</Link></li>
                      <li><Link to='/home/payment'>Cobranças</Link></li>
                      <li><Link to='/home/subgroups'>Sub-grupos</Link></li>
                      <li><Link to='/home/suggestion'>Sugestões</Link></li>
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
  return { listGroups: state.auth.listGroups }
}

export default connect(mapStateToProps, actions)(VerticalMenu)