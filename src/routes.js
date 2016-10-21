import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Container from './components/Container'
import ArticleList from './routeHandlers/ArticleListPage'
import NewArticleForm from './components/NewArticleForm'
import Filters from './components/Filters'
import Counter from './components/Counter'
import ArticlePage from './routeHandlers/ArticlePage'
import NotFoundPage from './routeHandlers/NotFoundPage'

export default <Router history = {browserHistory}>
    <Route path = "/" component = {Container} >
        <Route path = "articles" component = {ArticleList}>
            <Route path = "new" component = {NewArticleForm} />
            <Route path = ":id" component = {ArticlePage}/>
        </Route>
        <Route path = "filters" component = {Filters} />
        <Route path = "counter" component = {Counter} />
        <Route path = "*" component = {NotFoundPage} />
    </Route>
</Router>