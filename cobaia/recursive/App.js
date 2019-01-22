import React, { Component } from 'react'
import PollResult from './PollResult'

class App extends Component {

  arrayObj = {
    name: 'thiago',
    question: 'blob',
    options: [{
      text: 'zero'
    },{
      text: 'one', 
      votes: 1,
      options: [{
        text: 'alfa', 
        votes: 1
      },{
        text: 'beta', 
        votes: 1,
        options: [{
          text: 'Curintia', 
          votes: 1
        },{
          text: 'SPFC', 
          votes: 1
        }]
      },{
        text: 'Gamma', 
        votes: 1,
        options: [{
          text: 'Parmera', 
          votes: 1
        },{
          text: 'Santeco', 
          votes: 1
        }]
      }]
    },{
      text: 'two', 
      votes: 2,
      options: [{
        text: 'alfa', 
        votes: 1
      },{
        text: 'beta', 
        votes: 1,
        options: [{
          text: 'Curintia', 
          votes: 1
        },{
          text: 'SPFC', 
          votes: 1
        }]
      },{
        text: 'Gamma', 
        votes: 1,
        options: [{
          text: 'Parmera', 
          votes: 1
        },{
          text: 'Santeco', 
          votes: 1
        }]
      }]
    }]
  }


  render() {

    const {arrayObj} = this

    return (  
      <div className="App">
        <PollResult results={arrayObj.options}/>
      </div>
    );
  }
}

export default App;
