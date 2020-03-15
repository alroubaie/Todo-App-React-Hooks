import React from 'react';

const Todo = ({ todo, index, completedTodo, removeTodo }) => {
  return (
    <div
      style={{
        textDecoration: todo.isDone ? 'line-through' : '',
        width: '40vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        textAlign: 'center'
      }}
    >
      <div style={{ textAlign: 'left' }}>{todo.task}</div>
      <button
        style={{
          display: todo.isDone ? 'none' : 'inline-block',
          backgroundColor: '#4400ff',
          padding: '0.2rem 1.2rem',
          color: '#f1f1f1',
          fontSize: '1rem',
          borderRadius: '5px',
          border: 'none'
        }}
        onClick={() => completedTodo(index)}
      >
        complete
      </button>
      <button
        style={{
          display: !todo.isDone ? 'none' : 'inline-block',
          backgroundColor: '#ff0000',
          textDecoration: 'none',
          padding: '0.2rem 1.2rem',
          color: '#f1f1f1',
          fontSize: '1rem',
          borderRadius: '5px',
          border: 'none'
        }}
        onClick={() => removeTodo(index)}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
