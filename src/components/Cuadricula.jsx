import { useState } from "react"
import { useEffect } from "react"
import "./Cuadricula.css"
import Cripto from "./cripto/Cripto"

function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL  //peticion tipo GET

  const [criptos, setCriptos] = useState()  // para actualizar estados

  useEffect(() => {
    fetch(`${API_URL}assets`)   //o puede ser fetch, requiere json
      .then((resp) => resp.json())  //la respuesta recibida la convertira a un json
      .then((data) => {
        setCriptos(data.data)
      })
      .catch(() => {console.error("La petición falló")})
  } , [])

  if (!criptos) return <span> Cargando ... </span>

  return(
    <div className="app-container">
      <h1>Lista de Criptomonedas</h1>
      <div className="cripto-container">
        {criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
          <Cripto key={id} name={name} priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr} id={id}/>
        ))
        }
      </div>
    </div>
  )
}

export default Cuadricula
