import React from 'react'
import Header from './Header'

export default ({ children }) => {
  return(
    <div className='generalContent'>
      <div className='horizontalMenu'>
        das
      </div>
      <div className='contentMenu'>
        <Header />
        { children }
      </div>

    </div>
  )
}