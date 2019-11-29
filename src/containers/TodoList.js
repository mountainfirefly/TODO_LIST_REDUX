import React from 'react'
import { connect } from 'react-redux'

import { TodoListView } from '../components'
import { addTodo, updateTodo, removeTodo, fetchTodos } from '../actions'

class TodoListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <TodoListView {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  const { todos, fetching } = state.todos 

  return {
    todos: Object.values(todos),
    fetching
  }
}

const TodoList = connect(mapStateToProps, {
  addTodo,
  updateTodo,
  removeTodo,
  fetchTodos
})(TodoListContainer)

export { TodoList }
