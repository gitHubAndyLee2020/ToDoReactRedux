import listReducer from './list'
import viewReducer from './view'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    list: listReducer,
    view: viewReducer
})

export default allReducers 
