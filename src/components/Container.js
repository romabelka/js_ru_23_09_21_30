import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm'
import Filters from './Filters'
import Counter from './Counter'

class Container extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Counter />
                <Filters articles = {[]}/>
                <ArticleList />
                <Chart />
                <NewArticleForm />
            </div>
        )
    }
}

export default Container