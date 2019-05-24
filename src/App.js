import React, {
  useReducer,
} from 'react';

import useCombinedReducers from 'use-combined-reducers';
import Filter from "./conponents/Filter";
import DispatchContext from "./store/Dispatch";
import TodoList from "./conponents/TodoList";
import AddTodo from "./conponents/AddTodo";
import {filterReducer, initialTodos, todoReducer} from "./store/Reducers";

const App = () => {
  const [state, dispatch] = useCombinedReducers({
    filter: useReducer(filterReducer, 'ALL'),
    todos: useReducer(todoReducer, initialTodos),
  });

  const { filter, todos } = state;

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }

    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }

    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }

    return false;
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <Filter />
      <TodoList todos={filteredTodos} />
      <AddTodo />
    </DispatchContext.Provider>
  );
};

export default App;
