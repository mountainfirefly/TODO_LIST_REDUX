import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, SET_TODOS, FETCHING_TODOS } from '../actions/types'

const INITIAL_STATE = {
  todos: {
    1000: {
      title: 'Pankja',
      id: 1000
    },
    2000: {
      title: 'Test',
      id: 2000
    }
  },
  fetching: false
}

const TodoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCHING_TODOS:
      return {
        ...state,
        fetching: action.value
      }
    case ADD_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.id]: action.value
        }
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.id]: action.value
        }
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: Object.values(state.todos).reduce((soFar, value) => {
          if (action.id !== value.id) {
            soFar[value.id] = value
          }

          return soFar
        }, {})
      }
    case SET_TODOS:
      return {
        ...state,
        todos: {
          ...state.todos,
          ...action.value
        }
      }
    default:
      return state
  }  
}

export { TodoReducer }
