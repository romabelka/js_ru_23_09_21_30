import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'
import accordion from './../decorators/accordion'

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
                <a href = "#" onClick = {this.changeTitle(article)} >change title</a>
                <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
            </li>))

        return (
            <div>
                <ul>
                    {articleComponents}
                </ul>
                <Chart />
            </div>
        )
    }

    changeTitle = article => ev => {
        ev.preventDefault()
        article.title = 'some new title'
        this.setState({})
    }
}

export default accordion(ArticleList)