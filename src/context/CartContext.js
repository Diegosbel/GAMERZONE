import { createContext, useState } from "react";




export const CartContext = createContext({
    cart: []
})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart);


    const addItem = (productos, quantity) => {
        if (!isInCart (productos.id)) {
            setCart(prev => [...prev, { ...productos, quantity }])

        } else {
            console.error('Producto ya agregado')
        }
    }

    const total = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }

    const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id))
    

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)

    }

    const totalQuantity = ()=> cart.reduce((acumulador, itemAgregado)=> acumulador + itemAgregado.quantity, 0);


    return (
        <CartContext.Provider value={{addItem, removeItem, clearCart, cart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}