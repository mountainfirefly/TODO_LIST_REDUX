import React from 'react'

import { AddTodo } from './index'

const TodoListView = (props) => {
  const { todos, fetching } = props
  return (
    <div>
      <AddTodo addTodo={props.addTodo} />

      {!fetching ? todos.map((todo) => {
        return (
          <div onClick={() => props.removeTodo(todo.id)}>{todo.title}</div>
        )
      }): <div>Loading...</div>}
    </div>
  )
}

export { TodoListView }
