import { DELETE_ARTICLE } from '../constants'
import { articles as defaultArticles } from '../fixtures'

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
    }
    return articles
}