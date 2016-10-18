import $ from 'jquery'

export default store => next => action => {
    const { callAPI, ...rest } = action
    if (!callAPI) return next(action)

    $.get(callAPI)
        .done(response => next({...rest, response}))
}