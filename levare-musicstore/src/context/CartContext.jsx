import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const addItem = (item, qty) => {
        if(isInCart(item.id)) {
            setCart(cart.map((prod) => {
                if(prod.id === item.id) {
                    return {...prod, qty: prod.qty + qty}
                } else {
                    return prod
                }
            }))
        } else {
            setCart([...cart, {...item, qty}])
        }
    }

    const isInCart = (itemId) => {
        return cart.some((item) => item.id === itemId)
    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.qty * item.price, 0)
    }

    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.qty, 0)
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(item => item.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ isInCart, cart, addItem, removeItem, clearCart, totalPrice, totalQty }}>
            {children}
        </CartContext.Provider>
    )
}