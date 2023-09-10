import Button from "./Button"
import CartWidget from "./CartWidget"
import '../styles/Style.css'

const  NavBar = () => {

    const inicio = () => {
        console.log("Página de inicio");
    }

    const productos = () => {
        console.log("Mostrando Categorías")
    }

    const contacto = () => {
        console.log("Página Contacto");
    }

    return (
        <div className="nav-bar">
        <Button 
            id="inicio" 
            className="btn-nav" 
            onClick={inicio} 
            type="button"  
            value="inicio" 
            disabled={false} 
            text="Inicio"
        />
        <Button 
            id="productos" 
            className="btn-nav" 
            onClick={productos} 
            type="button"  
            value="productos" 
            disabled={false} 
            text="Productos"
        />
        <Button 
            id="contacto" 
            className="btn-nav" 
            onClick={contacto} 
            type="button"  
            value="contacto" 
            disabled={false} 
            text="Contacto"
        />
        <CartWidget />
        </div>


    )
}

export default NavBar