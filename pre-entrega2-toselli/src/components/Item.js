import { Link } from "react-router-dom"
import '../styles/Style.css'

const Item = ({id, name, description, price, stock, img}) => {

    return (
        <div className='card-container'>
            <div>
                <img className='card-img' src={img} alt={name} />
            </div>
            <div className='card-body'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Precio: <span>US$ {price}</span></p>
                <p>Cantidad disponible: {stock}</p>
                <Link to={`/item/${id}`} className="btn-detail">Detalles</Link>
            </div>
        </div>
    )
}

export default Item
