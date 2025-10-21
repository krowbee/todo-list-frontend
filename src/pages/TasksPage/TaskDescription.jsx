import { useState } from "react"
import { DeleteTaskForm } from "./DeleteTaskForm"
import { useEffect } from "react"
import { store } from "../../auth/userStore"
export const TaskDescription = ({ currentTask, setCurrentTask }) => {

    const [ deleteOpen, setDeleteOpen ] = useState(false)
    useEffect(()=>{
        setDeleteOpen(false);
    },[ currentTask ])

    return (
        <div className="task-description w-full shadow-sm p-2 rounded-lg flex h-[75%] flex-col col-start-1 row-start-2 lg:col-start-3 lg:row-start-1 "> 
                <div className="border border-2 border-base-300 rounded-lg p-6 w-full h-full flex flex-col gap-4 items-center justify-evenly">
                    {!currentTask ? 
                    (<div className="w-full h-full flex items-center text-3xl font-sans font-light justify-center">Choose any task</div>)
                    :
                    (<>
                    <h2 className="text-xl font-sans text-base-content">{currentTask.title}</h2>
                    <p className="text-md font-sans">{currentTask.description}</p>
                    {deleteOpen ? <DeleteTaskForm setDeleteOpen={setDeleteOpen} setCurrentTask={ setCurrentTask } deleteOpen={deleteOpen} currentTask={currentTask}/> :
                    <div>
                        <button className="btn btn-accent mx-2" onClick={() => {
                            store.handleEditTaskMenu()
                            }}>Edit</button>
                        <button className="btn btn-error btn-outline" onClick={() => setDeleteOpen(!deleteOpen)}>Delete</button>
                    </div>}
                    </>)
                    }
                </div>
            
        </div>
    )
}