
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <NavBar />

      {/* <ItemListContainer/> */}

      <ItemDetailContainer/>

      {/* <ItemCount/> */}
    </>
  );
}

export default App;
