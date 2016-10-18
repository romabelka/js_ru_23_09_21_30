import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrayToMap } from '../store/helpers'
import { Record } from 'immutable'

const ArticleModel = Record({
    id: null,
    date: null,
    title: "",
    text: "",
    comments: []
})

export default (articles = arrayToMap(normalizedArticles), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)

        case ADD_COMMENT:
            return {...articles,
                [payload.articleId]: {...articles[payload.articleId],
                    comments: articles[payload.articleId].comments.concat(action.generatedId)
                }
            }
    }

    return articles
}
