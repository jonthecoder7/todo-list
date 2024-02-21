import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let nextId = 0;

const INITIAL_TASKS = [
  { id: nextId++, label: 'Walk the dog' },
  { id: nextId++, label: 'Water the plants' },
  { id: nextId++, label: 'Wash the dishes' },
];

function TodoApp() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { id: nextId++, label: newTask.trim() }
      ]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          aria-label="Add new task"
          type="text"
          placeholder="Add your task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <div>
          <button onClick={handleAddTask}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <button onClick={() => handleDeleteTask(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

export default TodoApp;
