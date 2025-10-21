export const ProfileComponent = ({ store, tasks, activeTasks, overdueTasks }) => {
      
    return(
        <div className="profile-container shadow-sm card w-full flex flex-col rounded-lg p-2 bg-base-100 text-center items-center justify-center md:justify-start">
                <div className="border border-2 border-base-200 rounded-lg p-2 w-full flex flex-col rounded-lg">
                <h1 className="font-mono w-full font-bold text-xl text-center text-base-content tracking-wide">Hi,<span className="text-primary">{store.user.username}</span>!</h1>
                <ul>
                    <li className="item-list text-sm font-mono tracking-tight">You have <span className="text-error text-lg">{activeTasks.length}</span> active tasks</li>
                </ul>
                <div className="blocks w-full flex flex-row justify-between items-center">
                    <div className="total-tasks px-4  min-w-[75px] py-2 rounded-lg border border-base-300 border-2">
                        <h3 className="font-mono text-xs">Total</h3>
                        <span className="font-mono text-xl text-bold text-base-content">{ tasks.length }</span>
                    </div>
                    <div className="total-tasks px-4 min-w-[75px] py-2 rounded-lg border border-base-300 border-2">
                        <h3 className="font-mono text-xs">Active</h3>
                        <span className="font-mono text-xl text-bold text-base-content">{ activeTasks.length }</span>
                    </div>
                    <div className="total-tasks min-w-[75px] px-2 py-2 rounded-lg border border-base-300 border-2">
                        <h3 className="font-mono text-xs">Overdue</h3>
                        <span className="font-mono text-xl text-bold text-base-content">{ overdueTasks.length }</span>
                    </div>
                </div>
                </div>
            </div>
    )
} 