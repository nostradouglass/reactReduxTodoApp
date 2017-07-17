

import {combineReducers} from 'redux'
import TodosReducer from './todosReducer'


const allReducers = combineReducers({
    todos: TodosReducer,
})

export default allReducers;