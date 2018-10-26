import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => {
    console.log('todos', todos);
    return (
        <ul>
          { todos.map(todo => {
                return (<Todo key={ todo.id } {...todo} onClick={ () => toggleTodo(todo.id) } />)
            }
            ) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList