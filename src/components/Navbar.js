import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


function Navbar(){
  document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('scrollstyle');
        // add padding top to show content behind navbar
    
      } else {
        document.getElementById('navbar_top').classList.remove('scrollstyle');
         // remove padding top from body

      } 
  });
});
	return(<div class="container">
		<nav class="navbar container fixed-top navbar-expand-lg  navbar-light " id='navbar_top'>
  <Link to='/' class="navbar-brand" href="#">Fabricators</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto justify-content-between w-100">
      <li class="nav-item ">
        <Link to='/' class="nav-link" >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to='/about' class="nav-link" href="#">About Us</Link>
      </li>
      
      <li class="nav-item">
        <a class="nav-link " >Contact Us</a>
      </li>
    </ul>
   
  </div>
</nav>
</div>
		)
}
export default Navbar