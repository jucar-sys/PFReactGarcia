import './App.css';

// Rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Context
import { DarkModeProvider } from '../context/DarkModeContext.js';

// Componentes
import { NavBar } from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';

// Firebase
// import { createProducts } from '../firebase/firebase';

// React toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  // createProducts();
   return (
     <>
        <BrowserRouter>
        <DarkModeProvider>
          <NavBar />
          <ToastContainer />
          <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:category' element={<ItemListContainer />} />
              <Route path='/product/:id' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h2>404 - Página no existe</h2>} />
          </Routes>
        </DarkModeProvider>
        </BrowserRouter>
     </>
   )
}