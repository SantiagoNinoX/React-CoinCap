import { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {
    
    const navigation = useNavigate()
    const [user, setUser] = useState({
        email: "",   //probar con: eve.holt@reqres.in
        password: ""   // cityslicka
    })

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState()

    const submit = (e) => {
        e.preventDefault()
        setCargando(true)
        setError(null)
        axios.post(`https://reqres.in/api/login`,user)
        .then(data => {
            setCargando(false)
            console.log(data)
            localStorage.setItem("tokenAcceso", data.data.token)
            navigation("/")
        })   //nos devuelve un token: 'QpwL5tke4Pnpja7X4'
        .catch(e => {
            console.error(e)
            setCargando(false)
            setError(e.response.data.error)
        })
    }

    if(localStorage.getItem("tokenAcceso")) return <Navigate to="/"/>

    return (
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo electrónico</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        }) 
                    }} type="password" name="password" />
                </div>
                <div className="submit">
                    <input type="submit" value={cargando ? "cargando..." : "Ingresar"} className="link"/>
                </div>
            </form>
            {
                error && <span className="error">Error: {error}</span>
            }
        </div>
    )
}

export default Login