'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (
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
      title='Favoritos:'
      repos={[{
        name: 'nome do favorito',
        link: '#'
      }]}
    />
  </div>
)

export default AppContent
