import "./index.css"
import "./style/App.css"
import './style/NavBar.css';
import Carrousel from './componentes/Carrousel';
import CallAction from './componentes/CallAction';
import User from "./componentes/User";
import Footer from './componentes/Footer'
import NavBar from './componentes/NavBar';
import Cities from './componentes/Cities';
import './style/Carrousel.css';
import { Routes, Route } from "react-router-dom"


function App() {

  //PARTE LOGICA//
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/Cities" element={<Cities/>}></Route>
        <Route path="/Home" element={<Carrousel/>}></Route>
        <Route path="/User" element={<User/>}></Route>
        </Routes>
      <CallAction/>
      <Footer />
    </div>

  );
}

export default App;

