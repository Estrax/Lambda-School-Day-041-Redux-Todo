import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/todo';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';

const Todos = (props) => {
    return (
        <>
            {props.todos.map(todo =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleTodo={props.toggleTodo}
                    removeTodo={props.removeTodo}
                />
            )}
        </>
    );
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);