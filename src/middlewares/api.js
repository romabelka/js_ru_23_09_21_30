import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const { callAPI, type, ...rest} = action
    if (!callAPI) return next(action)

    next({...rest, type: type + START})

    //just for dev. No need in prod
    setTimeout(() => {
        fetch(callAPI)
            .then(res => {
                if (!res.ok) throw new Error(res.statusText)
                return res.json()
            })
            .then(response => next({...rest, type: type + SUCCESS, response}))
            .catch(error => next({...rest, type: type + FAIL, error: error.message}))
    }, 1000)
}