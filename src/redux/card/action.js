import {cardActionTypes} from './types'

export const setMenuVisibility = (visibility) => ({
    type: cardActionTypes.HIDDEN_DROPDOWN_MENU,
    payload: visibility
})

export const addItems = item => ({
    type: cardActionTypes.ADDITEMS,
    payload: item
})

export const removeItem = id => ({
    type: cardActionTypes.REMOVEITEM,
    payload: id
})