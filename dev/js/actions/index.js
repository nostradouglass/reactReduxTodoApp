

export function addTodo(todoItem) {
    return {
        type: "ADD_TODO",
        payload: todoItem
    }
}

export function removeTodo(todoId) {
    return {
        type: "REMOVE_TODO",
        payload: todoId
    }
}