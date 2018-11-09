import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const VerticalMenu = props => {
  const arrayData = props.listGroups === undefined ? [] : props.listGroups
  return(
    <React.Fragment>

      <input type='checkbox' id='hamburger' className='verticalMenuItem'/><label htmlFor="hamburger" className='hamburgerMenu'>☰</label>
      <div className='verticalMenu'>
        <nav>
          <li>
             <Link to='/home'>Home</Link>
          </li>
          {
            arrayData.map((dado, index) => (
              <li key={index}>
               <input type='checkbox' id={`subHamburger${index}`} className='verticalSubMenuItem'/><label htmlFor={`subHamburger${index}`} className='subHamburgerMenu'>{dado.name}</label>
                <ul className='verticalSubMenuItems'>
                    <li>Dashboard</li>
                    <li>Mensagens</li>
                    <li>Eventos</li>
                    <li>Cobranças</li>
                    <li>Sub-grupos</li>
                    <li>Sugestões</li>
                </ul>
              </li>
            ))
          }
        </nav>
      </div>
    </React.Fragment>
  )
  }


function mapStateToProps(state){
  return { listGroups: state.auth.listGroups }
}
export default connect(mapStateToProps)(VerticalMenu)