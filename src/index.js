import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <Route path="/" component={ App }/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
