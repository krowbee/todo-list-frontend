import { useContext, useState } from "react"
import { AddOrEditTaskForm } from "./AddOrEditTaskForm"
import TaskController from "./TaskController"
import { observer } from "mobx-react-lite"
import { Context } from "../../context"

export const EditTaskComponent = observer(({ task }) => {

    const { store } = useContext(Context)

    const onSubmit = async (data) => {
        const updatedTask = {
            id:task.id,
            title: data.title,
            description: data.description,
            dueTo: data.dueTo
        }
        const responseStatus = await TaskController.updateTask(updatedTask)
        if (responseStatus != 201) { setSubmitMessage("Something went wrong, please retry later") } 
        await store.setTasks()
        setSubmitMessage("Updated succesfully")
    }

    const [ submitMessage, setSubmitMessage ] = useState("")

    return (
        <div className="block lg:fixed flex items-center flex-col w-full h-full self-center lg:top-16 lg:right-54 lg:w-[300px] lg:h-[355px] lg:z-50 bg-base-100 p-6 lg:rounded-lg lg:border lg:border-2 lg:border-base-300 font-sans">
            <h1 className="text-center mt-25 lg:mt-0">Edit task</h1>
            <AddOrEditTaskForm onSubmit={onSubmit} formType={"edit"} submitMessage={submitMessage} task={task} />
        </div>
    )
})