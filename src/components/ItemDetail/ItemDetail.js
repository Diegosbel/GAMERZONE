import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail =({ id, nombre, imagen, descripcion, precio, stock }) => {

    const [quantityaAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)


        const item = {
            id, nombre, precio, imagen
        }

        addItem(item, quantity)
    }

    return (
        <article className="card">
            <header className="titulo">
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} className="imgCard" alt={nombre} />
            </picture>
            <section>
                <p className="descripcion">
                    Descripcion: {descripcion}
                </p>
                <p className="descripcion">
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                {
                    quantityaAdded > 0 ? (
                        <Link to={"/cart"} >Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;












