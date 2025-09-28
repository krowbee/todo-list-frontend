import $api from "../lib/api";

export default class AuthService{
    static async login(email, password){
        return $api.post("/auth/login", { email, password });
    }

    static async register(username, email, password){
        return $api.post("/auth/register", {username, email, password});
    }

    static async logout(){
        return $api.post("/auth/logout");
    }
}