import { useEffect } from "react"
import AppProviders from "./app/providers.jsx"
import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "./context.js"
import Loader from "./ui/Loader.jsx"



function App() {
    const { store } = useContext(Context)
    

    useEffect(()=>{
        (async ()=>{
            if (localStorage.getItem("token")){
            store.setIsLoading(true);
            await store.checkAuth();
            store.setIsLoading(false);
        }
        store.checkTheme();
        })()
    },[])

    return store.isLoading ? (<Loader />):(
    <div className="min-h-screen flex flex-col" data-theme={store.theme}>
     <AppProviders />
    </div>
        )
}

export default observer(App)