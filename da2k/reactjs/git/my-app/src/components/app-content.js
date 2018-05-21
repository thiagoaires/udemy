import React from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred}) => (
  <div className='app'>
    <Search handleSearch={handleSearch} isDisabled={isFetching} />
    { isFetching && <div>...carregando</div> }
    { !!userinfo && <UserInfo userinfo={userinfo} /> }
    { !!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} /> }

    { !!repos.length &&
      <Repos 
        className='repos' 
        title='Repositorios'
        repos={repos}
      />
    }
    { !!starred.length && 
      <Repos 
        className='starred'
        title='Favoritos'
        repos={starred}
      />
    }
  </div>
)

export default AppContent