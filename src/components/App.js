import React, { Component } from 'react'

import Feed from '../containers/Feed'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Feed/>
      </div>
    )
  }
}

export default App
