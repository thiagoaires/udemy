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
      starred: []
    }
  }
  handleSearch(e) {
    const inputValue = e.target.value
    const keyPressed = e.which || e.keyCode
    if (keyPressed === 13) {
      ajax().get(`https://api.github.com/users/${inputValue}`)
        .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            public_repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
        })
      })
      // .then(
      // )
    }
  }
  handleRepos(){
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
      .then(result => {
        console.log(result)
        this.setState({
          repos: [...result]
        })
      })  
  }

  handleStarred(){
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/starred`)
    .then(result => {
      console.log(result)
      this.setState({
        starred: [...result]
      })
    })  
  }
  getRepos(valor){
    console.log(valor)
    
    // ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${valor}`)
    // .then(result => {
    //   this.setState({
    //     valor: [...result]
    //   })
    // })  
  }

  render() {
    return (
      <AppContent 
        userinfo={this.state.userinfo} 
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={(valor) => this.getRepos(valor)}
        // handleRepos={() => this.handleRepos()}
        // handleStarred={() => this.handleStarred()}
      />
    );
  }
}

export default App;
