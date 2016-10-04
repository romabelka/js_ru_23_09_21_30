import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm'
import Filters from './Filters'

class Container extends Component {
    static propTypes = {

    };

    render() {
        const { articles } = this.props
        return (
            <div>
                <Filters articles = {articles}/>
                <ArticleList articles = {articles} />
                <Chart />
                <NewArticleForm />
            </div>
        )
    }
}

export default Container