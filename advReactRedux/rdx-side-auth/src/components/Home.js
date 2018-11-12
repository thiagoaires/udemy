import React from 'react'
import requireAuth from './requireAuth'
import { Route } from 'react-router-dom'
import Dashboard from './home/Dashboard'
import Events from './home/Events'
import Messages from './home/Messages'
import Payment from './home/Payment'
import Suggestion from './home/Suggestion'
import Subgroups from './home/Subgroups'

const Home = () =>{
  return(
    <div>
      <h1>Grupo Social</h1>
      <Route path='/home/dashboard' component={ Dashboard }/>
      <Route path='/home/events' component={Events} />
      <Route path='/home/messages' component={Messages} />
      <Route path='/home/payment' component={Payment} />
      <Route path='/home/suggestion' component={Suggestion} />
      <Route path='/home/Subgroups' component={Subgroups} />
    </div>
  )
}

export default requireAuth(Home)