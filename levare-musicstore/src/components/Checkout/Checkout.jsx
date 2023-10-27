import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from '../../services/firebase/firebaseConfig'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import './Checkout.css'

const Checkout = () => {

    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const { cart, clearCart, totalQty } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')

    const buyerData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleConfirm = (e) => {
        e.preventDefault()

        if (!user.name && !user.phone) {
            alert('Complete por favor los campos requeridos')
        } else {
            let order = {
                user,
                item: cart,
                total: totalQty(),
                date: serverTimestamp()
            }

            const ordersRef = collection(db, 'orders')
            addDoc(ordersRef, order)
                .then((res) => {
                    setOrderId(res.id)
                    clearCart()
                })
                .catch((err) => console.log(err))
        }
    }


    return (
        <div>
            {orderId !== ''
                ? <div className="success">
                    <h2>Tu orden fue creada con éxito!</h2>
                    <h4>Número de orden: <span>{orderId}</span></h4>
                </div>

                : <div className='form-container'>
                    <h2>Terminar Compra</h2>
                    <h3>Completa tus datos para generar la orden de compra</h3>
                    <form onSubmit={handleConfirm} className='form'>
                        <div className="input-container">
                            <input
                                className='input-text'
                                type='text'
                                name='name'
                                onChange={buyerData}
                                required />
                            <label>Nombre y Apellido*</label>
                            <h5 className="invalid-data">*Nombre requerido</h5>
                        </div>
                        <div className="input-container">
                            <input
                                className='input-text'
                                type='phone'
                                name='phone'
                                onChange={buyerData}
                                required />
                            <label>Teléfono*</label>
                            <h5 className="invalid-data">código de área sin "0", número sin "15"</h5>
                        </div>
                        <div className="input-container">
                            <input
                                className='input-text'
                                type='email'
                                name='email'
                                onChange={buyerData}
                                required />
                            <label>E-mail*</label>
                            <h5 className="invalid-data">*Introduzca un email válido</h5>
                        </div>
                        <div className="input-container">
                            <input
                                className='input-text'
                                type='email'
                                name='email'
                                onChange={((e) => setValidateEmail(e.target.value))}
                                required />
                            <label>E-mail*</label>
                            <h5 className="invalid-data">*Repita su email</h5>
                        </div>
                        <hr></hr>
                        <div className='btn-container'>
                            <button type='submit' className='Button' disabled={validateEmail !== user.email}>Crear orden</button>
                        </div>
                    </form>
                </div>}
        </div>)
}

export default Checkout