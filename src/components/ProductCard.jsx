function ProductCard({ producto, agregarAlCarrito }) {

    return (
        <div className="product-card">

            <img
                src={producto.imagen}
                alt={producto.nombre}
                className="product-image"
            />

            <h3>{producto.nombre}</h3>

            <p>{producto.descripcion}</p>

            <p className="precio-normal">
                Precio normal: ${producto.precioNormal.toLocaleString("es-CL")}
            </p>

            <p className="precio-oferta">
                Oferta: ${producto.precioOferta.toLocaleString("es-CL")}
            </p>

            <button onClick={() => agregarAlCarrito(producto)}>
                Agregar al carrito
            </button>

        </div>
    )
}

export default ProductCard