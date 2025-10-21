import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { ProfileComponent } from "./TasksPage/ProfileComponent";
import { FilterComponent } from "./TasksPage/FilterComponent";
import { TasksComponent } from "./TasksPage/TasksComponent";
import { TaskDescription } from "./TasksPage/TaskDescription";
import { EditTaskComponent } from "./TasksPage/EditTaskComponent";
import TaskController from "./TasksPage/TaskController";
import { AddTaskComponent } from "./TasksPage/AddTaskComponent";
import { useWindowWidth } from "../hooks/useWindowWidth";


export const TasksPage = observer(() => {
    const { store } = useContext(Context);

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            await store.setTasks()
            setIsLoading(false)
        })();
    }, [store])

    useEffect(() => {
        if (!currentTask) return;
        const updated = store.tasks.find(task => task.id === currentTask.id)
        if (updated) setCurrentTask(updated)
        else setCurrentTask("")
    }, [store.tasks])

    const width = useWindowWidth();


    const [isLoading, setIsLoading] = useState(true);
    const [currentTask, setCurrentTask] = useState("");

    const [filter, setFilter] = useState("all")
    const now = new Date()
    const tasks = store.tasks || []

    const activeTasks = tasks.filter(task => !task.completed && new Date(task.dueTo) >= now)
    const overdueTasks = tasks.filter(task => !task.completed && new Date(task.dueTo) < now)
    const todayTasks = tasks.filter(task => task.dueTo == now.toISOString().split("T")[0])
    const completedTasks = tasks.filter(task => task.completed)

    const filteredTasks = filter === "all" ? tasks :
        filter === "active" ? activeTasks :
            filter === "overdue" ? overdueTasks :
                filter === "due-today" ? todayTasks :
                    filter === "completed" ? completedTasks : []


    return (<section className="relative w-full p-4 md:p-10 flex flex-col gap-4 md:grid md:grid-rows-2 md:grid-cols-[300px_1fr] lg:grid-cols-[300px_repeat(2,1fr)] lg:grid-rows-1">
        {store.isAddTaskOpen ? <AddTaskComponent /> : store.isEditTaskOpen ? <EditTaskComponent task={currentTask} /> : ''} 
        {width < 1024 && (store.isAddTaskOpen || store.isEditTaskOpen) ? "" : (<>
        <div className="sidebar w-full row-start-1 max-h-80 flex flex-col gap-3 items-center justify-between"> 
            <ProfileComponent store={store} tasks={tasks} activeTasks={activeTasks} overdueTasks={overdueTasks} /> 
            <FilterComponent filter={filter} setFilter={setFilter} /> 
        </div> 
        <TasksComponent filteredTasks={filteredTasks} setCurrentTask={setCurrentTask} setTasks={store.setTasks} isLoading={isLoading} />
        <TaskDescription currentTask={currentTask} setCurrentTask={setCurrentTask} />
        </>)}
        </section>)
})
