import './styles.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logDOM } from '@testing-library/react';

function App() {

  return (
    <header className="App-header">

      <NavBar />

    </header>
  );
}

export default App;
