const storedTasks = JSON.parse(localStorage.getItem("tasks"));

const initialState = {
  tasks: storedTasks || [],
};

const rootReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case "ADD_TASK":
      nextState = {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: new Date().getTime(),
            text: action.payload.text,
            completed: false, // Set completed to false for new tasks
          },
        ],
      };
      break;
    case "DELETE_TASK":
      nextState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
      break;
    case "TOGGLE_TASK":
      nextState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
      break;
    default:
      nextState = state;
      break;
  }

  // Save tasks to local storage when tasks are modified
  localStorage.setItem("tasks", JSON.stringify(nextState.tasks));

  return nextState;
};

export default rootReducer;
