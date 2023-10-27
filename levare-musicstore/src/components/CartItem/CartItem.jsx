import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css';


const CartItem = ({ item }) => {

  const { removeItem } = useContext(CartContext)

  function confirmRemove() { 
    const onConfirm = window.confirm("Está por eliminar item")
    if(onConfirm) {
      removeItem(item.id)
      alert('Item eliminado')
    }
  }

  return (
    <div className='cart-list-container'>
      <div className='cart-img-container'>
        <img src={item.img} alt={item.name} height={200} />
      </div>
      <div className='item-name'>
        <p>{item.name}</p>
      </div>
      <div className='item-qty'>
        <p>x{item.qty}</p>
      </div>
      <div className='item-price'>
        <p>${item.price}</p>
      </div>
      <div className='item-subtotal'>
        <p>Sub total: <span>${item.qty * item.price}</span></p>
      </div>
      <button className='btn-delete' onClick={confirmRemove}>X</button>
    </div>
  )
}

export default CartItem
