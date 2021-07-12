import { createSelector } from 'reselect'

const selectCard = state => state.card


export const selectCardItems = createSelector(
    [selectCard],
    card => card.items
)

export const selectCardHidden = createSelector(
    [selectCard],
    card => card.hidden
)

export const selectCardItemCount = createSelector(
    [selectCardItems],
    items => items.reduce( (count, item) => count + item.quantity, 0)
)

export const selectCardItemTotal = createSelector(
    [selectCardItems],
    items => items.reduce( (count, item) => count + item.quantity * item.price, 0)
)