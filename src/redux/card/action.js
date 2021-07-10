import {cardActionTypes} from './types'

export const setMenuVisibility = (visibility) => ({
    type: cardActionTypes.HIDDEN_DROPDOWN_MENU,
    payload: visibility
})

export const addItems = item => ({
    type: cardActionTypes.ADDITEMS,
    payload: item
})