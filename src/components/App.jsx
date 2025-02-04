import { Outlet, Navigate } from "react-router-dom"
import Menu from "./menu/Menu"

const App = () => {

    if(!localStorage.getItem("tokenAcceso")) return <Navigate to="/"/>

    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}

export default App