// components/TaskInput.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";
import { toast } from "react-toastify";

const TaskInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      toast.success(`${text} added successfully`)
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskInput;
