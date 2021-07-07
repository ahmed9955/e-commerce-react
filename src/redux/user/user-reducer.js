import { userActionTypes } from '../user/user-types'

const INITIAL_STATE = {
    current_user: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                current_user: action.payload 
            }
        default: 
            return state;
    }
}

export default userReducer