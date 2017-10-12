import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Main from './containers/main'
import Signup from './containers/signup'
import Business from './containers/business'

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router>
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/business" component={Business}/>
      </div>
    </Router>
  </Provider>,document.getElementById('layout'))
