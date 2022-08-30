import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Header from "./components/NavBar";


function App() {

  return (
    <>
    <div className="container-fluid fondo-nav">
        <Header />
    </div>
    <ItemListContainer title="Bienvenidos a la Granja" />
    </>
    
  )
}

export default App
