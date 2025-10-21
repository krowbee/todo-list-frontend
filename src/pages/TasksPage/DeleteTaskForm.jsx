import { useContext } from "react"
import TaskController from "./TaskController"
import { Context } from "../../context"
import { observer } from "mobx-react-lite"

export const DeleteTaskForm = observer(({setDeleteOpen, deleteOpen, setCurrentTask, currentTask}) => {

    const { store } = useContext(Context)

    const handleDelete = async () => {
        const response = await TaskController.deleteTask(currentTask)
        if (response.status == 200){ 
            setDeleteOpen(!deleteOpen)
            setCurrentTask("")
            store.setTasks()
            
        }

    }

    return(
        <div className="w-[300px] flex flex-col">
            <div className="flex flex-col items-center">
            <h2 className="text-lg">You try to delete this task</h2>
            <p className="text-md">Are you sure?</p>
            </div>
            <div className="flex flex-row justify-center gap-4">
                <button className="btn btn-outline btn-error" onClick={() => handleDelete()}>Yes</button>
                <button className="btn btn-outline btn-primary" onClick={() => setDeleteOpen(!deleteOpen)}>No</button>
            </div>
        </div>
    )
})