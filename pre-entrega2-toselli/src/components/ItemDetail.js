import ItemCount from "./ItemCount/ItemCount"
import '../styles/Style.css'

const ItemDetail = ({name, specs, price, stock, imglarge}) => {
    
    return(
        <div className='item-card'>
            <div className="item-img-container">
                <img className='item-img' src={imglarge} height={200} alt={name} />
            </div>
            <div className='item-body'>
                <h2>{name}</h2>
                <p>{specs}</p>
                <p>Precio:<br/>
                <span>US$ {price}</span></p>
                <ItemCount className="counter" initial={0} stock={stock} onAdd={(qty) => console.log('Cantidad agregada ', qty)} />
                <p> Cantidad disponible: {stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail