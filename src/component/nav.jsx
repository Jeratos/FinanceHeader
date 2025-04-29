import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

export default function nav() {
let [scroll ,setScroll] =useState(false);

let changeCl= ()=>{
  
  if(window.scrollY>=50){
    setScroll(true);
  }else{
    setScroll(false);
  }

}

window.addEventListener('scroll', changeCl);

  return (
    <div class="nav-cont ">
    <header class= {scroll ? "nav-scroll rounded-bottom navbar navbar-expand-lg navbar-light py-1  ":"nav rounded navbar navbar-expand-lg navbar-light bg-light py-3 "}>
      <div class=" container-fluid ">
        {/* <!-- Brand --> */}
        <Link style={scroll? {color:"white"}:{}} to="/" class="logo navbar-brand mx-5 my-1">
          <span class="fs-4">Finance Header</span>
        </Link>
  
        {/* <!-- Toggler for Mobile View --> */}
        <button 
        style={scroll? {backgroundColor:"rgba(255, 255, 255, 0.5)"}:{}}
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        {/* <!-- Navbar Links --> */}
        <div class="tag collapse navbar-collapse px-5 mx-3" id="navbarNav">
          <ul class="navbar-nav ms-auto mx-5" >
            <li class="nav-item mx-3" >
              <Link to="/" style={scroll? {color:"white"}:{}} class="nav-link active" aria-current="page">Home</Link>
            </li>
            <li class="nav-item mx-3">
              <Link to="/service" class="nav-link" style={scroll? {color:"white"}:{}}>Service</Link>
            </li>
            <li class="nav-item mx-3">
              <Link to="/industries" class="nav-link" style={scroll? {color:"white"}:{}}>Industries</Link>
            </li>
            <li class="nav-item mx-3">
              <Link to="/about" class="nav-link"style={scroll? {color:"white"}:{}}>About Us</Link>
            </li>
            <li class="nav-item mx-3">
              <Link to="/contact" class="nav-link" style={scroll? {color:"white"}:{}}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
  
  )
}
