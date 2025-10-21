import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Homepage } from "../home/Homepage";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import { GuestOnly } from "../auth/guards/GuestOnly";
import { LogoutForm } from "../pages/LogoutForm";
import { AuthOnly } from "../auth/guards/AuthOnly";
import { TasksPage } from "../pages/TasksPage";

export const router = createBrowserRouter([
        {
            element: <RootLayout />,
            children:[
                {index:true, path:"/", element:<Homepage />},

                {index:true, path:"/tasks", element:
                <AuthOnly>
                    <TasksPage />
                </AuthOnly>
                },

                {index:true, path:"/logout", element:
                <AuthOnly>
                    <LogoutForm />
                </AuthOnly>
                },

                {index:true, path:"/login", element:
                <GuestOnly>
                    <LoginForm />
                </GuestOnly>
                },

                {index:true, path:"/register", element:
                <GuestOnly>
                    <RegisterForm/>
                </GuestOnly>
                }
            ]
        },
]);