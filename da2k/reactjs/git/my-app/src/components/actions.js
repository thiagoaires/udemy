import React from 'react'

const Actions = ({handleRepos, handleStarred}) => (
  <div className="actions">
    <button onClick={handleRepos}>Ver Repositorios</button>
    <button onClick={handleStarred}>Ver Favoritos</button>
  </div>
)

export default Actions