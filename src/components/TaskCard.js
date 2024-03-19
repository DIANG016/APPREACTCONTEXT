import "./TaskCard.css"


import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";



const TaskCard = ({ task }) => {

const {deleteTask}=  useContext(TaskContext)

  useContext(TaskContext)
  return (
    <div className="cardTask">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>ELIMINAR TAREA</button>
    </div>
  );
};
export default TaskCard;
