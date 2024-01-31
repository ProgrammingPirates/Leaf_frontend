import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskDetail from './TaskDetail';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    // Fetch tasks from the backend API
    axios.get('http://your-backend-api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleTaskSelect = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    setSelectedTask(task);
  };

  const handleTaskCreate = (newTask) => {
    // Post new task to the backend API
    axios.post('http://your-backend-api/tasks', newTask)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error creating task:', error));
  };

  // Implement similar functions for editing, deleting, and marking tasks as completed

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskList tasks={tasks} onSelect={handleTaskSelect} />
      <TaskForm onCreate={handleTaskCreate} />
      {selectedTask && <TaskDetail task={selectedTask} />}
    </div>
  );
};

export default App;
