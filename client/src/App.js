
import './App.css';
import Navbar from './components/layout/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Fragment } from 'react';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from './context/Contact/ContactState';

const  App = () => {
  return (

    <ContactState>
    <Router>
    <Fragment>
     <Navbar/>

     <div className="container">
       <Routes>
         <Route path = "/" element ={<Home/>}/> 
         <Route path = "/about" element ={<About/>}/> 
       </Routes>
     </div>
    </Fragment>
    </Router>
    </ContactState>
  );

}

export default App;
