import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ item }) => {

  const [qtyAdded, setQtyAdded] = useState('')
  const { addItem } = useContext(CartContext)

  const onAdd = (qty) => {
      setQtyAdded(qty)
      addItem(item, qty)
    }

  return (
    <>
      {item && (
        <div className='item-card'>
          <div className="item-img-container">
            <img className='item-img' src={item.img} height={200} alt={item.name} />
          </div>
          <div className='detail-container'>
            <div className='item-body'>
              <h2>{item.name}</h2>
              <p>Categoría: {item.category}</p>
              <p>{item.specs}</p>
              <p>Precio:<br />
                <span>US$ {item.price}</span></p>
              <p> Cantidad disponible: {item.stock}</p>
              <div className='detail-counter'>
                {qtyAdded === '' ? <ItemCount className='counter' initial={1} stock={item.stock} onAdd={onAdd} />   
                : <Link to='/cart' className='btn-cart'>Ir al carrito</Link>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ItemDetail