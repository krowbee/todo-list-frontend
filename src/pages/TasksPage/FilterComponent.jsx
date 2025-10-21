
export const FilterComponent = ({filter, setFilter}) => {


    return (
        <div className="filter flex flex-col h-min-content px-2 items-center py-2 shadow-sm rounded-lg">
            <div className="buttons-container border border-2 border-base-200 rounded-lg flex-wrap p-2 items-center flex flex-row items-center gap-1 justify-around">
                <button className={`btn btn-md ${filter == "all" ? "btn-primary btn-active" : ""}`} onClick={() => setFilter("all") }>All</button>
                <button className={`btn btn-md ${filter == "active" ? "btn-primary btn-active" : ""}`} onClick={() => setFilter("active") }>Active</button>
                <button className={`btn btn-md ${filter == "due-today" ? "btn-primary btn-active" : ""}`} onClick={() => setFilter("due-today") }>Due today</button>
                <button className={`btn btn-md ${filter == "overdue" ? "btn-primary btn-active" : ""}`} onClick={() => setFilter("overdue") }>Overdue</button>
                <button className={`btn btn-md ${filter == "completed" ? "btn-primary btn-active" : ""}`} onClick={() => setFilter("completed") }>Completed</button>
            </div>
        </div>
    )
}