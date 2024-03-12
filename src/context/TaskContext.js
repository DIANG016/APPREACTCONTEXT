import { createContext, useState ,useEffect} from "react";
import task from "../data/Task";

export const TaskContext = createContext();

export function TaskContextProvaider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(tasksNew) {
    /*FUNCION PARA CREAR NUEVAS TAREAS AGREGANDO AL MISMO ARRAY DE TAREAS*/

    setTasks([
      ...tasks,
      {
        title: tasksNew.title,
        id: tasks.length,
        description: tasksNew.description,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(task);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          deleteTask,
          createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
