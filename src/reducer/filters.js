import { CHANGE_DATE_RANGE, CHANGE_SELECTION } from '../constants'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_DATE_RANGE:
            return {...filters,...payload}

        case CHANGE_SELECTION:
            return {...filters,...payload}
    }

    return filters
}