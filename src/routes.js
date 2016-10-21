import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Container from './components/Container'
import ArticleList from './components/ArticleList'
import NewArticleForm from './components/NewArticleForm'
import Filters from './components/Filters'
import Counter from './components/Counter'

export default <Router history = {browserHistory}>
    <Route path = "/" component = {Container} >
        <Route path = "articles" component = {ArticleList} />
        <Route path = "filters" component = {Filters} />
        <Route path = "counter" component = {Counter} />
        <Route path = "new" component = {NewArticleForm} />
    </Route>
</Router>