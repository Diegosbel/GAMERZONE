import { useContext } from "react"
import cart from "./assets/371979.svg"
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget =()=> {


    const { totalQuantity } = useContext(CartContext)

    return (
        <div className="carroCompra">
            <Link to="/cart" >
                <img src={cart} alt="Carro compras"/>
                {totalQuantity()}
            </Link>

        </div>
    )
}

export default CartWidget