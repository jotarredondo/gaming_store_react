import { useState } from "react"
import productos from "./data/productos"
import ProductList from "./components/ProductList"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
import "./App.css"

function App() {

// Estado principal del carrito
    const [carrito, setCarrito] = useState([])

// Agrega un producto al carrito
    function agregarAlCarrito(producto) {
        setCarrito([...carrito, producto])
    }

// Elimina una unidad del carrito según su posición
    function eliminarDelCarrito(index) {
        const nuevoCarrito = carrito.filter(
            (producto, indice) => indice !== index
        )

        setCarrito(nuevoCarrito)
    }

    return (
        <>
            <header>
                <h1>Gaming Store</h1>
            </header>
            <Navbar />

            <Carousel />

            <main>
                <ProductList
                    productos={productos}
                    agregarAlCarrito={agregarAlCarrito}/>

                <Cart
                    carrito={carrito}
                    eliminarDelCarrito={eliminarDelCarrito}/>
            </main>

            <Footer />
        </>
    )
}

export default App
