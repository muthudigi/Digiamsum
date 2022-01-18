import React, { Component } from 'react'

import './Navbar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../Footer/Footer';
import { Home } from '../Home/Home';






export class Navbar extends Component {

    render() {
        return (
            <>
                
     
                <nav class="navbar">
    
                <a class="navbar-brand" href="/">
      <div class="logo-image">
            <img src="Amsumlg.png" class="img-fluid"/>
      </div>
</a>
      <ul class="navbar-links">


        <li class="navbar-dropdown">
          <a href="/">Home</a>
          <div class="dropdown">
            <a href="#">Technologies we train</a>
            <a href="#">2</a>
            <a href="#">3</a>
          </div>
        </li>


        <li class="navbar-dropdown">
          <a href="#">Course</a>
          <div class="dropdown">
            <a href="#">Web Development</a>
            <a href="#">Artificial intelligence</a>
            <a href="#">Machine learning</a>
            <a href="#">Mobile app development</a>
            <a href="#">cloud security</a>
        
          </div>
        </li>


        <li class="navbar-dropdown">
          <a href="/About">About</a>
        </li>

        <li class="navbar-dropdown">
          <a href="#">Contact Us</a>
          <div class="dropdown">
            <a href="#">career</a>
          </div>
        </li>

      
        
      </ul>
    </nav>
    
        
        
<div>


</div>

      
   
       
                  </> ) } }