import React, { Component } from 'react'
import Article from './Article'
import Chart from './Chart'

class ArticleList extends Component {
    static propTypes = {

    };

    state = {
        openArticleId: null
    }

    render() {
        const { articles } = this.props
        const { openArticleId } = this.state

        const articleComponents = articles.map(article => (
            <li key={article.id}>
                <Article article = {article} isOpen = {article.id == openArticleId}
                         openArticle = {this.toggleArticle(article.id)}/>
            </li>
            )
        )
        return (
            <div>
                <ul>
                    {articleComponents}
                </ul>
                <Chart />
            </div>
        )
    }

    toggleArticle = id => ev => {
        this.setState({
            openArticleId: id
        })
    }
}

export default ArticleList