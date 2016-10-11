import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
import filters from './filters'

export default combineReducers({
    articles, count, filters
})