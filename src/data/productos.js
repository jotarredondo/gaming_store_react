import ps5 from "../assets/ps5.jpg"
import xbox from "../assets/xbox.jpg"
import switchImg from "../assets/switch.jpg"
import fc26 from "../assets/fc26.jpg"
import minecraft from "../assets/minecraft.jpg"
import mariokart from "../assets/mariokart.jpg"

const productos = [
  {
    id: 1,
    nombre: "PlayStation 5",
    precioNormal: 599990,
    precioOferta: 549990,
    descripcion: "Explora las increíbles posibilidades de juego con PlayStation 5.",
    imagen: ps5
  },
  {
    id: 2,
    nombre: "Xbox One",
    precioNormal: 449990,
    precioOferta: 399990,
    descripcion: "Juega grandes títulos, franquicias populares y clásicos de Xbox.",
    imagen: xbox
  },
  {
    id: 3,
    nombre: "Nintendo Switch 2",
    precioNormal: 519990,
    precioOferta: 469990,
    descripcion: "Disfruta tus juegos donde quieras con diferentes modos de juego.",
    imagen: switchImg
  },
  {
    id: 4,
    nombre: "EA Sports FC 26",
    precioNormal: 79990,
    precioOferta: 69990,
    descripcion: "Disfruta de la emoción del fútbol con tus equipos favoritos.",
    imagen: fc26
  },
  {
    id: 5,
    nombre: "Minecraft",
    precioNormal: 49990,
    precioOferta: 39990,
    descripcion: "Explora, construye y crea tu propia aventura.",
    imagen: minecraft
  },
  {
    id: 6,
    nombre: "Mario Kart World",
    precioNormal: 89990,
    precioOferta: 79990,
    descripcion: "Compite con Mario y sus amigos en divertidas carreras.",
    imagen: mariokart
  }
]

export default productos