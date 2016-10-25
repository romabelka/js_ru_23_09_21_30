import { Map } from 'immutable'
import store from './index'

export function getRelation(entity, relation, storeState) {
    if (!entity[relation] || !storeState[relation]) return []
    return entity[relation].map(id => storeState[relation].getIn(['entities', id]))
}

export function arrayToMap(arr, mapper = (f) => f) {
    return arr.reduce((acc, entity) => acc.set(entity.id, mapper(entity)), new Map({}))
}

export function authorizeUser() {
    return store.getState().user
}