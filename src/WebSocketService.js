import io from 'socket.io-client';

const socket = io('http://your-backend-api');

const subscribeToTaskUpdates = (callback) => {
  socket.on('/topic/taskUpdates', (data) => {
    callback(data);
  });
};

export { subscribeToTaskUpdates };
