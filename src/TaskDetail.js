import React from 'react';
import './TaskDetail.css';
const TaskDetail = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
};

export default TaskDetail;
