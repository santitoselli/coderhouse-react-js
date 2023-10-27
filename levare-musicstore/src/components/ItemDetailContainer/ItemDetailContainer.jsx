import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { itemServices } from '../../services/itemServices'
import './ItemDetailContainer.css'

const ItemDetailContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
  const [prod, setProd] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    itemServices.getItemById(itemId)
      .then(res => {
        setProd(res)
      })
      .catch(err => {
        console.error(err);
      })
      .finally (
        setLoading(false)
      )
  }, [itemId])

  if(loading) {
    return <h2>Cargando...</h2>
  } 

  return (
    <div className='detail-container'>
      <h2>{greeting}</h2>
      <div className='detail-list'>
        {prod && <ItemDetail item={prod} />}
      </div>
    </div>
  )
}

export default ItemDetailContainer