import { useState } from "react"

import ps5 from "../assets/ps5.jpg"
import xbox from "../assets/xbox.jpg"
import switchImg from "../assets/switch.jpg"

function Carousel() {

    const imagenes = [
        {
            id: 1,
            src: ps5,
            alt: "PlayStation 5"
        },
        {
            id: 2,
            src: xbox,
            alt: "Xbox"
        },
        {
            id: 3,
            src: switchImg,
            alt: "Nintendo Switch"
        }
    ]

    const [indiceActual, setIndiceActual] = useState(0)

    function imagenAnterior() {
        setIndiceActual(
            indiceActual === 0
                ? imagenes.length - 1
                : indiceActual - 1
        )
    }

    function imagenSiguiente() {
        setIndiceActual(
            indiceActual === imagenes.length - 1
                ? 0
                : indiceActual + 1
        )
    }

    return (
        <section className="carousel">
            <button
                className="carousel-btn"
                onClick={imagenAnterior}
            >
                ❮
            </button>

            <img
                src={imagenes[indiceActual].src}
                alt={imagenes[indiceActual].alt}
                className="carousel-image"
            />

            <button
                className="carousel-btn"
                onClick={imagenSiguiente}
            >
                ❯
            </button>
        </section>
    )
}

export default Carousel