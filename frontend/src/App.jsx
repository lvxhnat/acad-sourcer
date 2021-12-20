import React from 'react'
import './App.css'
import PrivateRouter from './components/auth/privaterouter'

import NavBar from './components/nav/navbar'

import Main from './pages/main'
import Research from './pages/researchmain'

import AboutPilot from './pages/about/pilot'

import Login from './pages/auth/login'
import Logout from './pages/auth/logout'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <>
          <NavBar />
          <PrivateRouter exact path="/" component={Main} />
          <PrivateRouter exact path="/research" component={Research} />
          <PrivateRouter exact path="/aboutpilot" component={AboutPilot} />
        </>
      </Switch>
    </Router>
  )
}

export default App
