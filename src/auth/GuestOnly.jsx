import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../context";
import { Navigate } from "react-router-dom";

export const GuestOnly = observer(({children})=>{

    const { store } = useContext(Context);
    

    const params = new URLSearchParams(window.location.search);
    
    const to = params.get("returnTo")  || "/";
    
    if (store.isAuth) return <Navigate to={to} replace />
    
    return children;
}) 