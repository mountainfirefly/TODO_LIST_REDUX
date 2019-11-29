import React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import store from './store'
import { TodoList } from './containers'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
