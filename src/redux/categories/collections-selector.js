import { createSelector } from 'reselect'

const collection = state => state.collections

export const collectionsSelector = createSelector(
    [collection],
    collection => collection
) 