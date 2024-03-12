
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import TaskCard from "./TaskCard";

// console.log(task);
const TaskList = () => {

  const {tasks}=useContext(TaskContext)



  if (tasks.length === 0) {
    return <h1>NO HAY TAREAS</h1>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}  />
      ))}
    </>
  );
};

export default TaskList;
