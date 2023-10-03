import { useEffect, useState } from "react"
import { getProductById } from "../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import '../styles/Style.css'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(res => {
                setProduct(res)
            })
            .catch (err => {
                console.error(err);
            })
    }, [itemId])

    return (
        <div className="card-list">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer