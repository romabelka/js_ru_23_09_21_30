import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articles = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
    }
    return articles
}