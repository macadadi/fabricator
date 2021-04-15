import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


function Navbar(){
	return(
		<div >
		<nav class="navbar  fixed-top navbar-expand-lg navbar-light ">
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