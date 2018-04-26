'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='Digite o nome do usuário no GitHub' />
    </div>
    <div className='user-info'>
      <img src='https://avatars3.githubusercontent.com/u/625627?v=4' />
      <h1 className='username'><a href='https://github.com/thiagoaires'>Thiago Aires</a></h1>
    </div>

    <ul className='repos-info'>
      <li>- Repositorios: 5</li>
      <li>- Seguidores: 0</li>
      <li>- Seguindo: 3</li>
    </ul>

    <div className='actions'>
      <button>Ver Repositorios</button>
      <button>Ver Favoritos</button>
    </div>

    <div className='repos'>
      <h2>Repositorios</h2>
      <ul>
        <li><a href='#'>Nome do repositorio</a></li>
        <li><a href='#'>Nome do repositorio</a></li>
      </ul>
    </div>

    <div className='starred'>
      <h2>Favoritos</h2>
      <ul>
        <li><a href='#'>Lista de Favoritos</a></li>
        <li><a href='#'>Lista de Favoritos</a></li>
      </ul>
    </div>
  </div>
)

export default App
