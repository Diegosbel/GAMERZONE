import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetails.css"
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
        <article className="card_detail">
            <header className="titulo">
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} className="img_detail" alt={nombre} />
            </picture>
            <section>
                <p className="descripcion_detail">
                    Descripcion: {descripcion}
                </p>
                <p className="descripcion_detail">
                    Precio: ${precio}
                </p>
            </section>
            <footer >
                {
                    quantityaAdded > 0 ? (
                        <Link to={"/cart"} className="btnFooter" >Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;












