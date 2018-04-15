import React, { Component } from 'react'

import Feed from '../containers/Feed'

class App extends Component {
  render() {
    return (
      <div>
        <h1>News</h1>
        <Feed/>
      </div>
    )
  }
}

export default App
