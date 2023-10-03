import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';

// La app llama primero al componente Header. Y luego al componente ItemListContainer en principio. Este componente de categorías más adelante aparecerá al clickear "Productos" en la NavBar. Por último llamo al componente Footer para el fondo de la página.

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<h1>NO ENCONTRADO</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
