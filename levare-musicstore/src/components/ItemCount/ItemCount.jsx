import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)
    const increase = () => {
        if(count < stock) {
            setCount(count +1)
        }
    }
    const decrease = () => {
        if(count > 0) {
            setCount(count -1)
        }
    }
    

    return (
        <div className="counter">
            <div className='btn-counter'>
                <button onClick={decrease}> - </button>
                <p>{count}</p>
                <button onClick={increase}>+</button>
            </div>
            <div>
                <button className="btn-add" onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount