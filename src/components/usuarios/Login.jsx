import { useState } from "react"
import axios from "axios"

const Login = () => {
    
    const [user, setUser] = useState({
        email: "",   //probar con: eve.holt@reqres.in
        password: ""   // cityslicka
    })

    const submit = (e) => {
        e.preventDefault()
        axios.post(`https://reqres.in/api/login`,user)
        .then(data => {
            console.log(data)
            localStorage.setItem("tokenAcceso", data.data.token)
        })   //nos devuelve un token: 'QpwL5tke4Pnpja7X4'
        .catch(e => console.error(e))
    }

    return (
        <div className="Login-container">
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
                    <input type="submit" value="Ingresar" />
                </div>
            </form>
        </div>
    )
}

export default Login