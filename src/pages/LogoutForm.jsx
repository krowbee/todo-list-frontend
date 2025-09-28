import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../context";
import { useNavigate } from "react-router-dom";

export const LogoutForm = observer(() => {
    const { store } = useContext(Context);
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        await store.logout()
        navigate("/")
    }

    return (
        <div className="md:card w-full md:w-96 bg-base-100 card-xl md:shadow-sm self-center">
            <div className="card-body p-8">
                <h2 className="card-title text-center text-primary">Logout</h2>
                <p className="text-base-content">Are you sure that you want to logout?</p>
                <div className="justify-center card-actions">
                    <button className="btn btn-neutral btn-outline w-[70%]" onClick={() => handleLogout()}>Logout</button>
                </div>
            </div>
        </div>
    )
})