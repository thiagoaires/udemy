import React, { Component } from 'react';
import './App.css';
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />
        <Repos 
          className='repos' 
          title='Repositorios'
          repos={[
            {
              name: 'repositorio',
              link: '#'
            },
            {
              name: 'Outro Repositorio',
              link: '#'
              },
          ]}
        />
        <Repos 
          className='starred'
          title='Favoritos'
          repos={[
            {
              name: 'Favorito 1',
              link: '#'
            },
            {
              name: 'Favorito 2',
              link: '#'
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
