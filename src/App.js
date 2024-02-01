// App.js

import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskEdit from './TaskEdit';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
  ]);

  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const handleSaveEdit = (taskId, newTitle) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, title: newTitle } : task
    ));
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleCreateTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
      <TaskForm onSubmit={handleCreateTask} />
      {editingTask && (
        <TaskEdit
          task={editingTask}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default App;
