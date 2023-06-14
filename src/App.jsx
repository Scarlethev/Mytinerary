import NavBar  from './componentes/NavBar';
import './style/NavBar.css';
import Carrousel from './componentes/Carrousel';
import './style/Carrousel.css';

function App() {

      //PARTE LOGICA//
  return (
    <div className="App">
      <NavBar/>
      <Carrousel/>
      
     {/* <BreadcrumbExample/> */}
    </div>
  
  );
}

export default App;

