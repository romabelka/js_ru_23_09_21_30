import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Loader from './Loader'
import accordion from './../decorators/accordion'
import { loadAllArticles } from '../AC/articles'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { loadAllArticles, loaded, loading } = this.props
        if (!loaded && !loading) loadAllArticles()
    }

    render() {
        const { articles, loading, toggleItem, isItemOpen } = this.props

        if (loading) return <Loader />

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

export default connect(state => {
    const { articles, filters } = state
    const selected = filters.get('selected')
    const { from, to } = filters.get('dateRange')

    const articleArray = articles.get('entities').valueSeq().toArray()
    const filteredArticles = articleArray.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
    return {
        articles: filteredArticles,
        loading: articles.get('loading'),
        loaded: articles.get('loaded')
    }
}, { loadAllArticles })(accordion(ArticleList))