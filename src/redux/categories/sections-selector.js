import { createSelector } from 'reselect'

const sections = state => state.sections

export const sectionsSelector = createSelector(
    [sections],
    sections => sections
)