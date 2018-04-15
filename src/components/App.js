import React, { Component } from 'react'

import Feed from '../containers/Feed'
import ArticleDetail from '../containers/ArticleDetail'

class App extends Component {
  render() {
    return (
      <div>
        <h1>The Simonhalalalala News</h1>
        <Feed/>
        <ArticleDetail/>
      </div>
    )
  }
}

export default App
