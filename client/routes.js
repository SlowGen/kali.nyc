import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home} from './components'

/**
 * COMPONENT
 */
const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
    </Switch>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
