import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'

export default combineReducers({
    count, articles
})


/*
export default combineReducers({
    count: counterReducer,
    articles: articleReducer
})
*/
