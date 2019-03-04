import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../constants/actionTypes';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        paload: todo
    }
}

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        paload: todo
    }
}

export const toggleTodo = (todo) => {
    return {
        type: TOGGLE_TODO,
        paload: todo
    }
}