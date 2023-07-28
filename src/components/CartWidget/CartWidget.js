import { useContext } from "react"
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget =()=> {


    const { totalQuantity } = useContext(CartContext)

    return (
        <div className="carroCompra">
            <Link to="/cart" >
                <AiOutlineShoppingCart className="carrito"/>
                {totalQuantity()}
            </Link>

        </div>
    )
}

export default CartWidget