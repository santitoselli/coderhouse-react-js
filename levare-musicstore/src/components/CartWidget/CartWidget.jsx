import './CartWidget.css'
import cartLogo from './assets/cart.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

  const { totalQty } = useContext(CartContext)

  return (
      <div to='/cart' className='cart-widget'>
        <img className='cart-logo' src={cartLogo} alt='cart-widget' />
        {totalQty() > 0 && <p>{totalQty()}</p>}
      </div>
  )
}

export default CartWidget