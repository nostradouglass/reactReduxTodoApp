const uuidv4 = require('uuid/v4');


var initialState = []


export default function(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: uuidv4(),
                    todo: action.payload
                }
            ]
        case "REMOVE_TODO":
        return [
            ...state.filter((todo) => {
                return todo.id !== action.payload
            })
        ]
        default:
            return state;
    }
}