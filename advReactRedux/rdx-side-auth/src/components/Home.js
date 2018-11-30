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
      <Route path='/home/dashboard/:idGroup' component={Dashboard}/>
      <Route path='/home/events/:idGroup' component={Events} />
      <Route path='/home/messages/:idGroup' component={Messages} />
      <Route path='/home/payment/:idGroup' component={Payment} />
      <Route path='/home/suggestion/:idGroup' component={Suggestion} />
      <Route path='/home/Subgroups/:idGroup' component={Subgroups} />
    </div>
  )
}

export default requireAuth(Home)