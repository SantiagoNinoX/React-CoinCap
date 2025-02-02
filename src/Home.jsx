import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Hola, bienvenido a CriptoMarket by CoinCap</h1>
            <p>Conoce las 100 cripto monedas más usadas</p>
            <Link to ="/criptomonedas">Ver criptomonedas</Link>
        </>
    )
}

export default Home