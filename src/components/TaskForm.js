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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="ESCRIBE TU TAREA"
        onChange={(e) => {
          setTilte(e.target.value);
          
        }}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Descricion de nueva tarea"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
      <button>GUARDAR</button>
    </form>
  );
};

export default TaskForm;
