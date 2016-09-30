import React from 'react'
import Article from './Article'
import Chart from './Chart'

export default (props) => {
    const { articles } = props

    const articleComponents = articles.map(article => <li key={article.id}><Article article = {article}/></li>)
    return (
        <div>
            <ul>
                {articleComponents}
            </ul>
            <Chart />
        </div>
    )
}