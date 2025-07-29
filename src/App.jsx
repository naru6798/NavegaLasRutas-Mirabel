import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'


const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer info="En Hecteón somos un equipo apasionado por transformar espacios con luz, color y creatividad. Combinamos técnicas artesanales de resina y con tecnología para crear piezas únicas que iluminan y decoran con estilo y personalidad."/>
    </>
  )
}
export default App