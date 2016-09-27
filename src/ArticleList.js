import React from 'react'
import Article from './Article'

export default (props) => {
    const { articles } = props

    const articleComponents = articles.map(article => <li key={article.id}><Article article = {article}/></li>)
    return (
        <ul>
            {articleComponents}
        </ul>
    )
}