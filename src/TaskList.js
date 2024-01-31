import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onSelect }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} onClick={() => onSelect(task.id)}>
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
