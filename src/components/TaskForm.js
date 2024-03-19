import "./TaskForm.css"


import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTilte] = useState("");
  const [description, setdescription] = useState("");

 const {createTask}=useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTilte("");
    setdescription("");
  };

  return (
    <div className="formPadre">
    <form onSubmit={handleSubmit} className="formTask">
      <input className="taskInput"
        placeholder="ESCRIBE TU TAREA"
        onChange={(e) => {
          setTilte(e.target.value);
          
        }}
        value={title}
        autoFocus
      />
      <textarea className="text"
        placeholder="Descricion de nueva tarea"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="guardar">GUARDAR</button>
    </form>
    </div>
  );
};

export default TaskForm;
