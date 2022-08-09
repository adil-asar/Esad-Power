import React from 'react'
import logo from '../images/logo.jpeg'
import {HashLink as Link} from 'react-router-hash-link'
import { FaBars } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <>



<nav className="navbar fixed-top p-0   navbar-expand-lg navbar_style">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
<div className='d-flex align-items-center'>
<img src={logo} width="100px" className='img-fluid' alt="" />
<div className='brand_text d-sm-block d-none'>Energy Systems Analytics <br/> and Diagnostics (ESAD)</div>
     
</div>
    
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation">
      <span className=""><FaBars/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <NavLink  className="nav-link active" aria-current="page" to="/">HOME</NavLink> */}
          <Link className="nav-link" to="#hero_page">  HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#whatwedo"> OUR TEAM</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#difference">THE POWER OF DATA</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="#value">AI AND ML</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#industries">SOLUTIONS</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="#resourcepage">VALUE FOR CUSTOMER</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="#contact">CONTACT</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>





    </>
  )
}

export default Navbar