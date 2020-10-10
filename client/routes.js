import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, About, Work, Blog, Photos, MsgMe} from './components'

/**
 * COMPONENT
 */
const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/blog" component={Blog} />
      <Route path="/photos" component={Photos} />
      <Route path="/msgme" component={MsgMe} />
    </Switch>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
