export function getRelation(entity, relation, storeState) {
    if (!entity[relation] || !storeState[relation]) return []
    return entity[relation].map(id => storeState[relation].find(relEntity => relEntity.id == id))
}