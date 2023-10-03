import CartWidget from "./CartWidget/CartWidget"
import '../styles/Style.css'
import { NavLink, Link } from "react-router-dom"
import logo from '../assets/img/logo.jpg'
import { useState } from "react"
// Creo la función NavBar que llama a componentes "Button" con distintas props para cada botón de la NavBar. Luego al final llamo al componente "CartWidget" con el carrito de compras

const NavBar = () => {

    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <nav className="header">
            <Link to='/' className="nav-bar-title">
                <img className='app-logo' src={logo} alt="logo" />
                <h1>Levare Music Store</h1>
            </Link>
            <div className="nav-bar">
                <div className="btn-nav">
                    <NavLink to="/">Inicio</NavLink>
                </div>
                <div className="btn-nav" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    Productos ⏷
                    {showDropdown && (
                        <div className="drop-down">
                            <NavLink to={`/category/amplificadores`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Amplificadores</NavLink>
                            <NavLink to={`/category/guitarras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guitarras</NavLink>
                            <NavLink to={`/category/efectos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Efectos</NavLink>
                            <NavLink to={`/category/teclados`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Teclados</NavLink>
                        </div>
                    )}
                </div>
                <div className="btn-nav">
                    <NavLink to="/contacto">Contacto</NavLink>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar