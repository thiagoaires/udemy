import React from 'react'
import './search.css'

const Search = ({handleSearch, isDisabled}) => (
  <div className="search">
    <input 
      type="search" 
      placeholder='Digite o nome do usuario do github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

export default Search