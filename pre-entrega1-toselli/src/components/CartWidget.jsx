import React from 'react'
import cart from '../img/cart.png'
import '../styles/Style.css'

const CartWidget = () => {

    const items = 0

    return (
        <div className='cart-widget'>
            <img src={cart} className='cart-logo' alt="cart-logo" height={40}/>
            <p>{items}</p>
        </div>
    )
}

export default CartWidget