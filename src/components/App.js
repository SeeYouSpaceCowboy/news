import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import SlugFeed from '../containers/SlugFeed'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route path="/home" component={ Home }/>
              <Route path="/:slug" component={ SlugFeed }/>
              <Route path="/" component={ Home }/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
