import React, { useState } from 'react';
import './TaskForm.css';



const TaskForm = ({ onCreate }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newTask);
    setNewTask({ title: '', description: '', dueDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newTask.title}
        onChange={handleChange}
        placeholder="Task Title"
      />
      <textarea
        name="description"
        value={newTask.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <input
        type="date"
        name="dueDate"
        value={newTask.dueDate}
        onChange={handleChange}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
