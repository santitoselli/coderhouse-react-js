import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink } from "react-router-dom"
import logo from './assets/logo.jpg'
import { useState } from "react"

const NavBar = () => {

    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <nav className="header">
            <NavLink to='/' className="nav-bar-title">
                <img className='app-logo' src={logo} alt="logo" />
                <h1>Levare Music Store</h1>
            </NavLink>
            <div className="nav-bar">
                <div className="btn-nav">
                    <NavLink to="/" className="nav-link">Inicio</NavLink>
                </div>
                <div className="btn-nav" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    Productos ⏷
                    {showDropdown && (
                        <div className="drop-down">
                            <NavLink to={`/category/amplificadores`} className="nav-link">Amplificadores</NavLink>
                            <NavLink to={`/category/guitarras`} className="nav-link">Guitarras</NavLink>
                            <NavLink to={`/category/efectos`} className="nav-link">Efectos</NavLink>
                            <NavLink to={`/category/teclados`} className="nav-link">Teclados</NavLink>
                        </div>
                    )}
                </div>
                <div className="btn-nav">
                    <NavLink to="/acerca" className="nav-link">Acerca</NavLink>
                </div>
                <div className="btn-nav">
                    <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                </div>
                <NavLink to='/cart' className="nav-link"> <CartWidget/> </NavLink>
            </div>
        </nav>
    )
}

export default NavBar