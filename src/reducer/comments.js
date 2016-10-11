import {  } from '../constants'
import { normalizedComments} from '../fixtures'
import { arrayToMap } from '../store/helpers'

export default (comments = arrayToMap(normalizedComments), action) => {
    const { type, payload, response, error } = action

    switch (type) {

    }

    return comments
}