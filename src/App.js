import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import './App.css';
import Maps from "./Maps";


function App() {
  return <Router>
  <nav>
    <Link to="/about" className="Link">About Us</Link>
    <Link to="/" className="Link">Our Menu</Link>
    <Link to="/contact" className="Link">Order Online</Link>
    <Link to="/maps" className="Link">Tips For You</Link>
  </nav>

  <Routes>
    <Route path="/about" element={< About/>} />
    <Route path="/" element={ <Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/maps" element={<Maps/>}/>

  </Routes>
  </Router>
}
export default App;


