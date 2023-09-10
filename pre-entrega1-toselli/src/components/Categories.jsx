import React from 'react'

const Categories = (list) => {
    
    const {texto, url} = list

    return (
            <a href={url}>{texto}</a>
    )
}

export default Categories