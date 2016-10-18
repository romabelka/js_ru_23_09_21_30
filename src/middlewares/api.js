import $ from 'jquery'
import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const { callAPI, type, ...rest } = action
    if (!callAPI) return next(action)

    next({...rest, type: type + START})

    //For dev only, no need in prod
    setTimeout(() => {
        $.get(callAPI)
            .done(response => next({...rest, response, type: type + SUCCESS}))
            .fail(error => next({...rest, error, type: type + FAIL}))
    }, 1000)
}