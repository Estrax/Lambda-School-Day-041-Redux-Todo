import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

const TodoForm = ({ dispatch }) => {
    const [todo, setTodo] = useState({todoText: ""})
    
    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch(addTodo(todo.todoText));
            setTodo({ todoText: "" });
        }}>
            <input
                type="text"
                placeholder="Type your todo here..."
                onChange={e => setTodo({ ...todo, todoText: e.target.value })}
                value={todo.todoText}
            />
            <input type="submit" value="Add todo" />
        </form>
    );
}

export default connect()(TodoForm);