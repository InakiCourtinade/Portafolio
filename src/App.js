import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import SobreMi from './componentes/SobreMi';
import LandingPage from './componentes/LandingPage';

function App() {
  return (
    <div>
      <NavBar/>
      <LandingPage/>|
      <SobreMi/>
    </div>
  );
}

export default App;
