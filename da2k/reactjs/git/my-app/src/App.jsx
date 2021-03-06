import React, { Component } from 'react';
import './App.css';

import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  getUrlFromGitHub(userGit, reposGit){
    const reposUrl = reposGit ? `/${reposGit}` : ''
    return `https://api.github.com/users/${userGit}${reposUrl}`
  }
  
  handleSearch(e) {

    const inputValue = e.target.value
    const keyPressed = e.which || e.keyCode
    if (keyPressed === 13) {
      this.setState({isFetching: true})
      ajax().get(this.getUrlFromGitHub(inputValue))
        .then((result) => {

          this.setState({

            userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            public_repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
      .always(() => {
        this.setState({isFetching: false})
      })
    }
  }

  getRepos(valor){
    return e => (
      ajax().get(this.getUrlFromGitHub(this.state.userinfo.login, valor))
      .then(result => {
        this.setState({
          // [valor]: [...result]
          [valor]: result.map(repo => (
            {name: repo.name,
            html_url: repo.html_url}
          ))
        })
      })  
    )
  }

  render() {
    return (
      <AppContent 
        {...this.state}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
        // handleRepos={() => this.handleRepos()}
        // handleStarred={() => this.handleStarred()}
      />
    );
  }
}

export default App;
