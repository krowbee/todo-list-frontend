import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../context";
import { Calendar } from "../ui/Calendar";


export const TasksPage = observer(() => {
    const { store } = useContext(Context);
    const [date, setDate] = useState("");


    return (<section className="w-full grid grid-cols-1 md:grid-rows-2 md:grid-cols-[min-content_1fr] lg:grid-cols-[min-content_repeat(2,1fr)] ">
        <div className="sidebar row-start-1 row-span-2 w-full h-full flex flex-col justify-between items-center">
            <div className="profile-container card shadow-sm w-full flex flex-col rounded-none p-2 bg-base-100 text-center items-center justify-center md:justify-start">
                <h1 className="font-mono w-full font-bold text-xl text-center text-base-content tracking-wide">Hi,<span className="text-primary">{store.user.username}</span>!</h1>
                <ul>
                    <li className="item-list text-sm font-mono tracking-tight">You have <span className="text-error text-lg">13</span> uncompleted tasks</li>
                </ul>
            </div>
            <div className="date-filter w-full h-max-content flex flex-col items-center md:items-start justify-center pt-4">
                <h2 className="text-center w-full font-mono text-base-content text-xl font-bold">Filter by date</h2>
                <Calendar setDate={setDate} date={date}></Calendar>
            </div>
        </div>
        <div className="task-container overflow-y-auto w-full h-full col-start-2 col-span-1 shadow-md bg-base-100">
            <h1 className="font-mono text-xl text-center">Tasks</h1>
            <div className="task">
                <h1>task title</h1>
                <input
                    type="checkbox"
                    onChange={(e)=> e.target.value} className="checkbox border-red-400 bg-base-100 checked:border-green-500 checked:bg-green-400 checked:text-white"
                />
            </div>
        </div>

    </section>)
})