import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';


import { Navbar } from './Components/Navbar/Navbar';
import Reactrouter from './Components/Reactrouter'



const App = ()  => {
  return (

   <Router>

<Navbar />

<Reactrouter />
<Footer />
   </Router>
  )
}




export default App;



