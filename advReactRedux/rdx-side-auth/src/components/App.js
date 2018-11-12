import React from 'react'
import Header from './Header'
import VerticalMenu from './VerticalMenu';

export default ({ children }) => {
  return(
    <div className='generalContent'>

      {
        localStorage.getItem('token') !== null && <VerticalMenu />
      }

      <div className='contentMenu'>
        <Header />
        <h1 className='titleLogo'>GrupoSocial</h1>
        { children }
      </div>

    </div>
  )
}