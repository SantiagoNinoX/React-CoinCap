import { useContext } from "react"
import "./Menu.css"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

const Menu = () => {

    const usuario = useContext(UserContext)
    const navigation = useNavigate()
    
    return (
        <nav className="main-menu">
            <ul>
                <li> <NavLink to="/">Inicio</NavLink> </li>
                <li> <NavLink to="/criptomonedas">Lista de Criptos</NavLink> </li>
                <li> <NavLink to="/perfil">Perfil de {usuario.name}</NavLink> </li>
                <li> <a onClick={() => {
                    localStorage.removeItem("tokenAcceso")
                    navigation("/login")
                }}> Cerrar sesión</a></li>
            </ul>
        </nav>
    )
}

export default Menu