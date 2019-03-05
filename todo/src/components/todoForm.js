import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'
import { TodoAddForm, TodoAddBtn, TodoAddInput } from '../styles';

const TodoForm = ({ dispatch }) => {
    const [todo, setTodo] = useState({todoText: ""})
    
    return (
        <TodoAddForm
            onSubmit={e => {
                e.preventDefault();
                dispatch(addTodo(todo.todoText));
                setTodo({ todoText: "" });
            }}
        >
            <TodoAddInput
                type="text"
                placeholder="Type your todo here..."
                onChange={e => setTodo({ ...todo, todoText: e.target.value })}
                value={todo.todoText}
            />
            
            <TodoAddBtn
                type="submit"
                value="Add todo"
            />
        </TodoAddForm>
    );
}

export default connect()(TodoForm);