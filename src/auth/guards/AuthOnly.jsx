import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../context";
import { Navigate } from "react-router-dom";


export const AuthOnly = observer(({ children })=>{
    const { store } = useContext(Context);

    const to = "/login";

    if (!store.isAuth) return <Navigate to={to} replace/>

    return children
})