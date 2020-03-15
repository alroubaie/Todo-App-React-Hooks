import React, { useState } from 'react';
import Todo from './Todo';
import s from './todo.module.css';
const data = [
  {
    id: 1,
    task: 'Learn HTML',
    isDone: false
  },
  {
    id: 2,
    task: 'Learn CSS',
    isDone: false
  },
  {
    id: 3,
    task: 'Learn Javascript',
    isDone: false
  }
];
const TodoExample = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState(data);
  const addTodo = () => {
    const addNew = {
      id: 1 + Math.random(),
      task: newTodo,
      isDone: false
    };
    setTodos([addNew, ...todos]);
    setNewTodo('');
    console.log(...todos);
  };
  const removeTodo = index => {
    const removeTodo = [...todos];
    removeTodo.splice(index, 1);
    setTodos(removeTodo);
  };
  const completedTodo = index => {
    const isComplete = [...todos];
    isComplete[index].isDone = true;
    setTodos(isComplete);
  };

  return (
    <div className={s.grid}>
      <div>
        <input
          className={s.input}
          type='text'
          placeholder='Add New Task...'
          onChange={e => setNewTodo(e.target.value)}
        />
        <button disabled={!newTodo} className={s.add} onClick={addTodo}>
          Add
        </button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <li className={s.list} key={todo.id}>
            <Todo
              index={index}
              todo={todo}
              completedTodo={completedTodo}
              removeTodo={removeTodo}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default TodoExample;
