import ItemCount from "./ItemCount/ItemCount"
import '../styles/Style.css'

const ItemDetail = ({name, specs, price, stock, imgLarge}) => {
    
    return(
        <div className='card-container'>
            <div>
                <img className='card-img' src={imgLarge} height={200} alt={name} />
            </div>
            <div className='card-body'>
                <h2>{name}</h2>
                <p>{specs}</p>
                <p>Precio: <span>US$ {price}</span></p>
            </div>
            <div className="item-footer">
                <ItemCount initial={0} stock={stock} onAdd={(qty) => console.log('Cantidad agregada ', qty)} />
                <p> Cantidad disponible: {stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail