import { combineReducers } from 'redux'
import articleReducer from './articleReducer'

const rootReducer = combineReducers({
  articles: articleReducer,
  currentArticle: {}
})

export default rootReducer
