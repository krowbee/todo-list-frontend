import axios from "axios"
export const API_URL = "http://localhost:3000"
axios.defaults.withCredentials = true;

// Створив інстанс для запитів.
const $api = axios.create({ 
    baseURL:API_URL,
    timeout:1000,
    withCredentials:true,
})

// Створив request-інтерцептор
$api.interceptors.request.use((config)=>{
    if (!config.url.includes("/auth")){ // якщо url-запиту не включає /auth
        const token = localStorage.getItem("token"); // Отримую токен користувача
        config.headers.Authorization = `Bearer ${token}`// Вішаю у хедер Authorization токен користувача
    }
    return config; // Після чого обов'язково повертаю конфіг. Інакше запит просто зависне
})


// Створив response-інтерцептор
$api.interceptors.response.use((response)=>{ // При успішній відповіді, ми просто повертаємо response
    return response;
}, async (error) =>{ // У випадку статус коду який не входить у діапазон 2хх
    const OriginalRequest = error.config; // Зберігаємо початковий запит
    if (!error.config.url.includes("/auth") && error.response.status == 401 && !OriginalRequest._retry) {
        OriginalRequest._retry = true; // Додаємо, щоб можна було відстежувати роботу інтерцептора
        const response = await axios.post(API_URL+"/auth/refresh", {}, { withCredentials:true }); // окремий запит, щоб поновити токен
        localStorage.setItem("token", response.data.accessToken) // Встановлюємо токен
        return $api(OriginalRequest); // Повторюємо початковий запит
    } 

    return Promise.reject(error) // Інакше повертаємо помилку
     
})

export default $api;