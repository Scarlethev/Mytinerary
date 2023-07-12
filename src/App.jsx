import "./index.css"
import "./style/App.css"
import './style/NavBar.css';
import User from "./componentes/User";
import Footer from './componentes/Footer'
import NavBar from './componentes/NavBar';
import Cities from './componentes/Cities';
import Home from "./componentes/Home"
import Details from "./componentes/Details"
import Itinerary from "./componentes/Itinerary"

import './style/Carrousel.css';
import { Routes, Route } from "react-router-dom"


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
      <Routes>
        <Route path= "*" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Cities" element={<Cities/>}></Route>
        <Route path="/User" element={<User/>}></Route>
        <Route path="/Details/:id" element={<Details/>}></Route>
        <Route path="/Itinerary" element={<Itinerary/>}></Route>
        </Routes>
      <Footer />
      </div>
      </div>
  );
}

export default App;

