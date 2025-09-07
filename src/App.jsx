import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import Error from './componentes/Error/Error'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>

    <BrowserRouter> 

      <CarritoProvider>

        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/> 
        </Routes>

      </CarritoProvider>
      <ToastContainer/>
    </BrowserRouter>

    </>
  )
}

export default App
