import { CHANGE_DATE_RANGE, CHANGE_SELECTION } from '../constants'
import { Map } from 'immutable'

const defaultFilters = new Map({
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
})

export default (filters = defaultFilters, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_DATE_RANGE:
            return filters.set('dateRange', payload.dateRange)

        case CHANGE_SELECTION:
            return filters.set('selected', payload.selected)
    }

    return filters
}