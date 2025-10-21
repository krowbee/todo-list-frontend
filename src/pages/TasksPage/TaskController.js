import TaskService from "../../services/TaskService"
export default class TaskController {

    static displayDate(date){
        return new Date(date).toLocaleDateString("en-US",{
            day: "numeric",
            month: "short",
            year: "numeric"
        })}

    static async getTasks() {
        try {
            const response = await TaskService.getUserTasks()
            const rawTasks = response.data
            const formattedTasks = rawTasks.map(task => ({
                id: task._id,
                title: task.title,
                description: task.description,
                completed: task.completed,
                dueTo: task.dueTo,
                createdAt: task.createdAt.split("T")[0],
            }))
            return formattedTasks
        } catch (e) {
            console.log(e)
        }
    }

    static async addTask(title, description, dueTo){
        try{
            const response = await TaskService.createUserTask(title, description, dueTo)
            console.log(response)
            return response.status
        } catch (e){
            return e.response.status
        }
    }

    static async updateTask(task){
        try{
            const response = await TaskService.updateUserTask(task.id, task.title, task.description, task.completed, task.dueTo);
            return response
        } catch(e){
            console.log(e.response)
        }
    }

    static async deleteTask(task){
        try{
            const response = await TaskService.deleteUserTask(task.id)
            return response
        }catch(e){
            console.log(e.response)
        }
    }
}