// actions/index.js
export const addTask = (text) => ({
  type: 'ADD_TASK',
  payload: {
    id: new Date().getTime(), // Generate unique id
    text,
    completed: false, // Default to incomplete
  },
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  payload: {
    id,
  },
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id,
  },
});
