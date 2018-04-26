'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />

    <Actions />
    <Repos
      className='repos'
      title='Repositórios:'
      repos={[{
        name: 'nome do repositorio',
        link: '#'
      }]}
    />
    <Repos
      className='starred'
      title='Favorios:'
      repos={[{
        name: 'nome do favorito',
        link: '#'
      }]}
    />
  </div>
)

export default App
