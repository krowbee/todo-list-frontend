import { useContext } from "react";
import TaskController from "./TaskController";
import { Context } from "../../context";

export const TasksComponent = ({ filteredTasks, isLoading, setCurrentTask}) => {
  const { store } = useContext(Context)
  return (
    <div className="task-section mt-10 font-mono sm:mt-0 w-full h-full md:col-start-2 md:row-span-2 md:col-span-1">
      <div className="tasks-container flex flex-col shadow-sm rounded-lg p-2 overflow-y-auto h-65 md:h-screen lg:h-88 scrollbar-hide w-full gap-3">
        
        {isLoading ? (
          <div>Loading...</div>
        ) : filteredTasks.length === 0 ? (
          <div className="w-full h-full flex justify-center items-center">
          <p className="text-center text-lg text-center">You haven't created tasks yet</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => setCurrentTask(task)} className="task flex cursor-pointer transition-transform hover:scale-[1.01] flex-col border border-base-300 border-2 rounded-lg p-4 font-mono justify-between items-start"
            >
              <div className="flex flex-row justify-between w-full">
                <div className="w-full flex flex-col items-center justify-center m-2">
                  <div className="task-header flex flex-row justify-between w-full">
                    <h1 className="text-md font-mono w-[260px] lg:w-[360px] truncate">
                      {task.title}
                    </h1>
                  </div>
                  <div className="task-additional flex flex-row justify-between w-full">
                    <div className="flex flex-row justify-between w-full mt-2 text-xs">
                      <div className="flex flex-col lg:flex-row">
                        <span>created at: </span>
                        <span className="lg:mx-1">{TaskController.displayDate(task.createdAt)}</span>
                      </div>
                      <div className="flex flex-col lg:flex-row">
                        <span>Due to: </span>
                        <span className="lg:mx-1">{TaskController.displayDate(task.dueTo)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={async () =>{
                    const updatedTask = {...task, completed: !task.completed }
                    await TaskController.updateTask(updatedTask)
                    store.setTasks()
                    
                    
                }}
                  className="checkbox self-center border-primary border-2 bg-base-100 checked:bg-primary text-white"
                />
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
};
