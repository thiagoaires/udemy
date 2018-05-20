import React from 'react'

const Search = ({handleSearch}) => (
  <div className="search">
    <input 
      type="search" 
      placeholder='Digite o nome do usuario do github'
      onKeyUp={handleSearch}
    />
  </div>
)

export default Search