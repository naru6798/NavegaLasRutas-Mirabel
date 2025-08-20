import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import Error from './componentes/Error/Error'

const App = () => {
  return (
    <>

    <BrowserRouter> 

      <NavBar/>

      <Routes>

        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<Error/>}/>
        
      </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
