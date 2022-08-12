import { todoReducer } from "./todos/reducer";
import { legacy_createStore,combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todo : todoReducer
})

const middleWare = applyMiddleware(thunk)

export const store = legacy_createStore(rootReducer, middleWare)