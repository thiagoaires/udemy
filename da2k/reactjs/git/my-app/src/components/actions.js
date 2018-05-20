import React from 'react'

const Actions = ({getRepos}) => (
  <div className="actions">
    <button onClick={getRepos('repos')}>Ver Repositorios</button>
    <button onClick={getRepos('starred')}>Ver Favoritos</button>
  </div>
)

export default Actions