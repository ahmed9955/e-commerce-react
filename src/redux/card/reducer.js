import { handleCardItems } from './card-utils'
import {cardActionTypes} from './types'

const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cardActionTypes.HIDDEN_DROPDOWN_MENU:
            return {
                ...state,
                hidden: action.payload
            }
        
        case cardActionTypes.ADDITEMS: 
            return {
                ...state,
                items : handleCardItems(state.items, action.payload)
            }
        case cardActionTypes.REMOVEITEM:
            return {
                ...state,
                items: state.items.filter(item => {
                    if (item.id != action.payload){
                        return (item)
                    }
                })
            }

        default: return state
        }
}

export default cardReducer