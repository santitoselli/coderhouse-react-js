import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import {getProducts, getProductsByCategory} from '../data/data'
import { useParams } from 'react-router-dom'
import '../styles/Style.css'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(res => {
                setProducts(res)
            })
            .catch(err => {
                console.error(err);
            })
    }, [categoryId])

    return (
        <div className='list-container'>
            <h2>{greeting}</h2>
            <div className='card-list'>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer 