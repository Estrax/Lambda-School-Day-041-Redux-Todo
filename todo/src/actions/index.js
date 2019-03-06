import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../constants/actionTypes';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const removeTodo = (todoId) => {
    return {
        type: REMOVE_TODO,
        payload: todoId
    }
}

export const toggleTodo = (todoId) => {
    return {
        type: TOGGLE_TODO,
        payload: todoId
    }
}