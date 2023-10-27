import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { itemServices } from '../../services/itemServices'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    if (categoryId === undefined) {
      document.title = 'Levare - Productos'
      itemServices.getItems()
        .then(res => {
          setProds(res)
        })
        .catch((err) => console.log(err))
        .finally(
          setLoading(false)
        )
    } else {
      document.title = `Levare - ${categoryId}`
      itemServices.getItemsByCategory(categoryId)
        .then(res => {
          setProds(res)
        })
        .catch((err) => console.log(err))
        .finally(
          setLoading(false)
        )
      }
    }, [categoryId])

    if(loading) {
      return <h3>Cargando...</h3>
    }

  return (
    <div className='list-container'>
      <h1>{greeting} {categoryId}</h1>
      <div className='card-list'>
        <ItemList items={prods} />
      </div>
    </div>
  )
}

export default ItemListContainer