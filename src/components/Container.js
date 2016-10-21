import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm'
import Filters from './Filters'
import Counter from './Counter'
import { Provider } from 'react-redux'
import store from '../store'

class Container extends Component {
    static propTypes = {};

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <Counter />
                    <Filters articles={[]}/>
                    <ArticleList />
                    <Chart />
                    <NewArticleForm />
                </div>
            </Provider>
        )
    }
}

export default Container