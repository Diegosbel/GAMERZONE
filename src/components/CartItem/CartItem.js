import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import React from 'react';
import "../CartItem/CartItem.css"

const CartItem = ({ id, nombre, precio, quantity }) => {
    const {removeItem} = useContext(CartContext);

  return (
    <div className="cart_carro">
        <h4 > {nombre} </h4>
        <p> Cantidad: {quantity} </p>
        <p> Precio: ${precio} </p>
        <button onClick={() => removeItem(id)} className="btn"> Eliminar </button>
    </div>
  )
}

export default CartItem