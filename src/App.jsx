import "./index.css"
import "./style/App.css"
import './style/NavBar.css';
import User from "./componentes/User";
import Footer from './componentes/Footer'
import NavBar from './componentes/NavBar';
import Cities from './componentes/Cities';
import Home from "./componentes/Home"

import './style/Carrousel.css';
import { Routes, Route } from "react-router-dom"


function App() {

  //PARTE LOGICA//
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
      <Routes>
        <Route path= "*" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Cities" element={<Cities/>}></Route>
        <Route path="/User" element={<User/>}></Route>
        </Routes>
      <Footer />
      </div>
      </div>
  );
}

export default App;

