import './TaskList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { subscribeToTaskUpdates } from './WebSocketService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    axios.get('http://your-backend-api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));

    // Subscribe to WebSocket updates
    subscribeToTaskUpdates((updatedTask) => {
      setTasks((prevTasks) => prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
