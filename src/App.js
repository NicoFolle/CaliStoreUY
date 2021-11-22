
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {

  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Bienvenido a CaliStore Uruguay!"/>

      <ItemCount/>
    </>
  );
}

export default App;
