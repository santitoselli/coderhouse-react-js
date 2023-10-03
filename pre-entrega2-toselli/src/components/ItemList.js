import Item from '../components/Item'
import '../styles/Style.css'

const ItemList = ({products}) => {
    return(
        <div className='card-list'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList