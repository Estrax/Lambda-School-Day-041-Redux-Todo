import React from 'react';
import PropTypes from 'prop-types';
import { TodoText, TodoBtn, TodoDiv } from '../styles';

const Todo = (props) => {
    return (
        <TodoDiv>
            <TodoText
                onClick={() => props.toggleTodo(props.todo.id)}
                style={{ textDecoration: props.todo.completed ? 'line-through' : 'none'}}
            >
                {props.todo.text}
            </TodoText>
            
            <TodoBtn
                onClick={() => props.removeTodo(props.todo.id)}
            >
                X
            </TodoBtn>
        </TodoDiv>
    );
}

Todo.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired
}

export default Todo;