import React from 'react'
import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router'
import history from './history'
import { authorizeUser } from './store/helpers'
import Container from './components/Container'
import ArticleList from './routeHandlers/ArticleListPage'
import NewArticleForm from './components/NewArticleForm'
import Filters from './components/Filters'
import Counter from './components/Counter'
import ArticlePage from './routeHandlers/ArticlePage'
import NotFoundPage from './routeHandlers/NotFoundPage'
import CommentsRoot from './routeHandlers/CommentsRoot'
import CommentsPage from './routeHandlers/CommentsPage'
import ArticleIndexPage from './routeHandlers/ArticleIndexPage'
import ErrorPage from './routeHandlers/ErrorPage'

export default <Router history = {history}>
    <Route path = "/" component = {Container} >
        <IndexRedirect to = "/articles" />
        <Redirect from = "article" to = "articles" />
        <Route path = "articles" component = {ArticleList}
            onEnter = {() => console.log('---', 'entering articles')}
            onLeave = {() => console.log('---', 'leaving articles')}
            onChange = {() => console.log('---', 'changing articles')}
        >
            <IndexRoute component = {ArticleIndexPage} />
            <Route path = "new" component = {NewArticleForm}
                onEnter = {(nextState, replace) => authorizeUser() || replace('/error?message=Not authorized')}
            />
            <Route path = ":id" component = {ArticlePage}/>
        </Route>
        <Route path = "filters" component = {Filters} />
        <Route path = "comments" component = {CommentsRoot}>
            <IndexRedirect to = "1" />
            <Route path = ":page" component = {CommentsPage} />
        </Route>
        <Route path = "error" component = {ErrorPage} />
        <Route path = "*" component = {NotFoundPage} />
    </Route>
</Router>