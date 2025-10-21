import $api from "../lib/api";

export default class TaskService{

    static async getUserTasks(){
        return $api.get("/tasks");
    }

    static async createUserTask(title, description, dueTo){
        return $api.post("/tasks", {title, description, dueTo})
    }

    static async updateUserTask(taskId, title, description, completed, dueTo){
        return $api.patch(`/tasks/${taskId}`, {title, description, completed, dueTo})
    }

    static async deleteUserTask(taskId){
        return $api.delete(`/tasks/${taskId}`)
    }
}