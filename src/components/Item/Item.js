import "./Item.css"
import { Link } from "react-router-dom";



const Item = ({ id, nombre, imagen, precio, stock }) => {

    return (
        <article className="card">
            <header className="titulo">
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture >
                <img src={imagen} className="imgCard" alt={nombre} />
            </picture>
            <section>
                <p className="descripcion">
                    Precio: ${precio}
                </p>
                <p className="descripcion">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="contador">
                <Link to={`/Item/${id}`}>
                    <button className="btnContador">Ver detalle</button>
                </Link>
            </footer>
        </article>
    )
}

export default Item;

