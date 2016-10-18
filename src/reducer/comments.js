import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT } from '../constants'
import { Record } from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

export default (comments = arrayToMap(normalizedComments, comment => new CommentModel(comment)), action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return {...comments, [generatedId]: new CommentModel({...payload.comment, id: action.generatedId})}
    }

    return comments
}