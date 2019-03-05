import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
    return (
        <>
            <h1
                onClick={() => props.toggleTodo(props.todo.id)}
                style={{ textDecoration: props.todo.completed ? 'line-through' : 'none'}}
            >
                {props.todo.text}
            </h1>
            <button onClick={() => props.removeTodo(props.todo.id)}>Remove</button>
        </>
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