import { Outlet } from "react-router-dom"
import  Header  from "../../widgets/Header"
import { Footer } from "../../widgets/Footer"

export default function RootLayout(){

    return <>
    <Header/>
    <div className="w-full flex flex-1 justify-center">
    <Outlet />
    </div>
    <Footer />
    </>
}