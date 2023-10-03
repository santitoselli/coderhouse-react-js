import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [qty, setQty] = useState(initial)

    const increase = () => {
        if (qty < stock) {
            setQty(qty + 1)
        }
    }

    const decrease = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }

    return (
        <div className="counter">
            <div className='btn-counter'>
                <button onClick={decrease}> - </button>
                <p>{qty}</p>
                <button onClick={increase}>+</button>
            </div>
            <div>
                <button className="btn-add" onClick={() => onAdd(qty)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount