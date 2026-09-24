# Gaming Store React

Proyecto desarrollado para la asignatura Desarrollo Frontend I (PFY2201), Semana 7.

La aplicación corresponde a una evolución del eCommerce desarrollado en semanas anteriores, migrando la interfaz y la lógica principal a React mediante componentes funcionales.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- Node.js
- npm
- gh-pages

## Funcionalidades

- Listado de productos.
- Nombre, descripción e imagen por producto.
- Precio normal y precio oferta.
- Carrito de compras.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Contador total de productos.
- Cálculo automático del total del carrito.
- Renderizado condicional cuando el carrito está vacío.
- Carrusel desarrollado con React y useState.
- Diseño responsive para escritorio, tablet y dispositivos móviles.

## Conceptos de React aplicados

- Componentes funcionales.
- Props.
- useState.
- Eventos onClick.
- Renderizado condicional.
- Renderizado de listas mediante map().
- Manejo de estado.
- Comunicación entre componentes mediante props.

## Estructura principal

```text
src/
├── assets/
├── components/
│   ├── Cart.jsx
│   ├── Carousel.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── data/
│   └── productos.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
