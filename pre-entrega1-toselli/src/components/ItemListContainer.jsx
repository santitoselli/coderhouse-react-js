import React from 'react'
import Categories from './Categories'

const ItemListContainer = (greeting) => {
    
    return (
        <div className='drop-title'>
            <h2>{greeting.texto}</h2>
            <div className='drop-down'>
                <Categories texto="Amplificadores"/>
                <Categories texto="Guitarras/Bajos"/>
                <Categories texto="Pedales/Efectos"/>
                <Categories texto="Teclados"/>
                <Categories texto="Varios"/>
            </div>
        </div>
    )
}

export default ItemListContainer