import React from 'react'
import NavBar from './NavBar'
import '../styles/Style.css'
import logo from '../img/logo.jpg'

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header-title'>
                <img className='app-logo' src={logo} alt="logo" />
                <h1 className='h1-title'>Levare Music Store</h1>
            </div>
            <NavBar/>
        </div>
    )
}

export default Header