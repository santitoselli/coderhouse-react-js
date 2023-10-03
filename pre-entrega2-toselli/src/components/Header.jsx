import React from 'react'
import '../styles/Style.css'
import logo from '../img/logo.jpg'

// El Header consta de un Logotipo y el título de la página. Y luego llamo al componente NavBar inmediatamente.

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header-title'>
                <img className='app-logo' src={logo} alt="logo" />
                <h1 className='h1-title'>Levare Music Store</h1>
            </div>
        </div>
    )
}

export default Header