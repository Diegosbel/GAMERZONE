import "./ItemCount.css"
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [ quantity, setQuantity ] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }



    return (
        <div>
            <div className="counter">
                <button onClick={decrement} className="decrement">-</button>
                <h4 className="count">{quantity}</h4>
                <button onClick={increment} className="increment" >+</button>
            </div>
            <div>
                <button className="btnContador" onClick={() => onAdd ( quantity )} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>

    )
}

export default ItemCount;