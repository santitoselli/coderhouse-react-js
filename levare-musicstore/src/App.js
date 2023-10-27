import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Contacto from './Pages/Contacto/Contacto';
import Acerca from './Pages/Acerca/Acerca';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Productos'/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoría'/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer greeting='Detalle del producto' />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/acerca' element={<Acerca />} /> 
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
