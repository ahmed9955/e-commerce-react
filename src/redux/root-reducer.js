import { combineReducers } from 'redux'

import userReducer from './user/user-reducer'
import cardReducer from './card/reducer' 

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { sectionsReducer } from './categories/secions-reducer'
import { collectionReducer } from './categories/collection-reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['card']
}

const rootReducer = combineReducers({
    user: userReducer,
    card: cardReducer,
    sections: sectionsReducer,
    collections: collectionReducer
})  

export default persistReducer(persistConfig, rootReducer) 