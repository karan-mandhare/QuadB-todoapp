import { useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions";

const Todo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    // Load tasks from local storage on component mount
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((task) => {
      // Check if task already exists in Redux store before adding
      if (!tasks.find((existingTask) => existingTask.text === task.text)) {
        dispatch(addTask(task.text));
      }
    });
  }, [dispatch, tasks]);

  return (
    <div className="container-lg" style={{ width: "100%", maxWidth: "50rem", margin: "auto" }}>
      <h1 className="text-center m-4 fw-bold">Todo List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Todo;
