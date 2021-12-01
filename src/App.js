import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartView } from './components/CartView/CartView';
import { CartProvider } from './context/CartContext';


function App() {


  return (

    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:catId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>


  );
}

export default App;
