import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, SET_TODOS, FETCHING_TODOS } from './types'

export const addTodo = (value) => {
  return {
    type: ADD_TODO,
    value,
    id: value.id
  }
}

export const updateTodo = (value) => {
  return {
    type: UPDATE_TODO,
    value,
    id: value.id
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}

export const fetchingTodos = (value) => {
  return {
    type: FETCHING_TODOS,
    value
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchingTodos(true))
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      }
    })
    .then((result) => {
      dispatch({
        type: SET_TODOS,
        value: result.reduce((soFar, value) => {
          soFar[value.id] = value

          return soFar
        }, {})
      })

      dispatch(fetchingTodos(false))
    })
  }
}
