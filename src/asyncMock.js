

const productos = [
    {
        id: "1",
        imagen: "/img/ps4.png",
        nombre: "Play station 4",
        precio: "219.000",
        categoria: "consolas",
        stock: "12",
        descripcion: "Play station 4 Cuenta con un procesador APU de ocho núcleos x86-64 Jaguar desarrollado por AMD. La GPU también fabricada por AMD Radeon tiene una potencia de procesamiento de 1,84 Teraflops. La memoria de PS4 ha sido elevada hasta los 8 GB RAM DDR5 con un ancho de banda de 176 GB por segundo."
    }, {
        id: "2",
        imagen: "/img/ps5.png",
        nombre: "Play station 5",
        precio: "459.999",
        categoria: "consolas",
        stock: "6",
        descripcion: "Frecuencia variable de GPU hasta 2.23 GHz (10.3 TFLOPS). Memoria GDDR6 16 GB con ancho de banda de 448 GB/s. Unidad de almacenamiento SSD 825 GB. Ancho de banda de lectura 5.5 GB/s (datos puros) y 9 GB/s (datos comprimidos)."
    },
    {
        id: "3",
        imagen: "/img/xboxs.png",
        nombre: "Xbox Series S",
        precio: "249.999",
        categoria: "consolas",
        stock: "10",
        descripcion: "Experimente la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. Vuélvase completamente digital y disfrute de juegos de última generación sin discos con la consola Xbox más pequeña que se haya fabricado. El paquete incluye: consola Xbox Series S, un controlador inalámbrico Xbox, un cable HDMI de alta velocidad y un cable de alimentación. Experimente la velocidad y el rendimiento de próxima generación con la arquitectura Xbox Velocity, impulsada por un SSD personalizado y un software integrado."
    }, {
        id: "4",
        imagen: "/img/fifa23.png",
        nombre: "Fifa 23",
        precio: "22.999",
        categoria: "juegos",
        stock: "20",
        descripcion: "FIFA es el videojuego de fútbol más vendido de la actualidad y con más de 25 años de desarrollo. Vas a poder jugar con tus equipos y futbolistas preferidos en diversos modos. ¡Preparate para convertirte en campeón de todas las copas y torneos!"
    }, {
        id: "5",
        nombre: "Spider-man",
        imagen: "/img/spiderman.png",
        precio: "27.999",
        categoria: "juegos",
        stock: "15",
        descripcion: "Experimenta el nacimiento de Miles Morales a medida que el nuevo héroe domina nuevos, increíbles y explosivos poderes para convertirse en su propio Spider-Man."
    }, {
        id: "6",
        imagen: "/img/dragonball.png",
        nombre: "Dragon ball z: Kakarot",
        precio: "14.879",
        categoria: "juegos",
        stock: "10",
        descripcion: "¡Experimenta, por primera vez, la historia de DRAGON BALL Z desde eventos épicos hasta diversas misiones secundarias, que incluyen momentos de la historia nunca antes vistos que responden a algunas preguntas emocionantes de la historia de DRAGON BALL!"
    },
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === productCategoria))
        }, 500)
    })
}



