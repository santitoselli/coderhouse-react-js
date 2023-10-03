import React from "react";

const Button = (props) => {

    const {id, className, onClick, type, value, disabled, children} = props

    return (
        <button 
            id={id} 
            className={className} 
            onClick={onClick} 
            type={type} 
            value={value}
            disabled={disabled}
            >
            {children}
        </button>
    )
    
}

export default Button