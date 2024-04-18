import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../actions";
import { toast } from "react-toastify";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
    toast.info("Item marked successfully");
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    toast.error(`Item deleted successfully`);
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? "completed" : ""
          }`}
        >
          <span
            onClick={() => handleToggle(task.id)}
            style={{ cursor: "pointer" }}
          >
            {task.text}
          </span>
          <div>
            <button
              onClick={() => handleToggle(task.id)}
              className={`btn btn-sm ${
                task.completed ? "btn-success" : "btn-secondary"
              }`}
            >
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="btn btn-sm btn-danger m-2"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
