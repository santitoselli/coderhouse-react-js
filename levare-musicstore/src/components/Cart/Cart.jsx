import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {

    const { cart, clearCart, totalPrice } = useContext(CartContext)

    function confirmClear() {
        const onConfirm = window.confirm("Está por vaciar el carrito")
        if (onConfirm) {
            clearCart()
            alert('Carrito vacío')
        }
    }

    return (
        <div>
            {cart.length ?
                <div className='cart-container'>
                    <h2>Tu pedido</h2>
                    <div>
                        {cart.map((item) => <CartItem key={item.id} item={item} />)}
                    </div>
                    <div className='total-price'>
                        <h3>Total a pagar: <span>${totalPrice()}</span></h3>
                    </div>
                    <button onClick={confirmClear} className='btn-clear'>Vaciar carrito</button>
                    <div className='btn-checkout'>
                        <Link to='/checkout'>Terminar</Link>
                    </div>
                </div>
                : <div className='cart-container'>
                    <h2>Tu carrito está vacío</h2>
                    <Link to='/' className='btn-inicio'>Productos</Link>
                </div>
            }
        </div>
    )
}

export default Cart