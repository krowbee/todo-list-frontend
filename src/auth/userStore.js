import { makeAutoObservable } from "mobx";
import axios from "axios";
import { API_URL } from "../lib/api"
import AuthService from "../services/AuthService";
import TaskController from "../pages/TasksPage/TaskController";

export class Store {
    user = {};
    isAuth = false;
    theme = "light"
    isLoading = true;
    isAddTaskOpen = false;
    isEditTaskOpen = false;
    tasks = [{}]

    constructor() {
        makeAutoObservable(this)
    }


    async setTasks() {
        const tasks = await TaskController.getTasks()
        this.tasks = tasks
    }

    setIsLoading(bool) {
        this.isLoading = bool;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    checkTheme = () => {
        const theme = localStorage.getItem("theme");
        if (theme) { this.theme = theme };
    }

    setTheme = (theme) => {
        localStorage.setItem("theme", theme);
        this.theme = theme;
    }

    handleTheme = () => {
        const newTheme = this.theme === "light" ? "dark" : "light";
        this.setTheme(newTheme);
    }

    handleAddTaskMenu = () => {
        if (this.isEditTaskOpen) { this.isEditTaskOpen = false }
        this.isAddTaskOpen = !this.isAddTaskOpen
        
    }


    handleEditTaskMenu = () => {
        if (this.isAddTaskOpen) { this.isAddTaskOpen = false }
        this.isEditTaskOpen = !this.isEditTaskOpen
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            return e?.response
        }
    }

    async register(username, email, password) {
        try {
            const response = await AuthService.register(username, email, password);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            return e?.response;
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            return e
        }
    }

    async checkAuth() {
        try {
            const response = await axios.post(`${API_URL}/auth/refresh`, {}, { withCredentials: true })
            localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            this.setAuth(false);
        }
    }
}

export const store = new Store();