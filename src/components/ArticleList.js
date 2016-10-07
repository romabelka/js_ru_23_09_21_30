import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    };

    render() {
        const { articles, toggleItem, isItemOpen } = this.props

        const articleComponents = articles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
            </li>))

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles
}))(accordion(ArticleList))