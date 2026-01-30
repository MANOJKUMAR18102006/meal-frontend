import { Outlet } from "react-router"
import Navigation from "../component/Navigation";

const HomeLayout = () =>{
    return(
        <>
        <div className="bg-emerald-900 h-screen">
        <Navigation/> 
        <Outlet/> 
        </div>
        </>
    )
}

export default HomeLayout;