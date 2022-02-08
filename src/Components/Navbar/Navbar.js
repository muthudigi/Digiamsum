import React, { Component } from 'react'

import './Navbar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../Footer/Footer';
import { Home } from '../Home/Home';






export class Navbar extends Component {

    render() {
        return (
            <>
                
     
              <header>
                <nav class="navbar">
    
    <a class="navbar-brand" href="/">
<div class="logo-image">
<img src="Amsumlg.png" class="img-fluid"/>
</div>
</a>
<ul class="navbar-links">


<li class="navbar-dropdown">
<a href="/">Home</a>

</li>


<li class="navbar-dropdown">
<a href="/Course">Course</a>

</li>


<li class="navbar-dropdown">
<a href="/About">About</a>
</li>

<li class="navbar-dropdown">
<a href="/Contact">Contact Us</a>

</li>



</ul>
</nav>

</header>
 
    
        
        


     
   
       
                  </> ) } }