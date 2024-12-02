import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
// navbar-dropdown-menu: hidden sm:flex gap-5 text-5m text-gray-700
//w-2/4 border-none h-[1.5px] bg-gray-700
const Navbar = () => {
  return (
    <div className='navbar-container'>
       <img src={assets.logo} className='logo' alt="" />

       <ul className='navbar-dropdown-menu'>
        <NavLink to='/' className='navlink'>
            <p>Home</p>
            <hr className='navlink-hr'/>
        </NavLink>
        <NavLink to='/collection' className='navlink'>
            <p>Collection</p>
            <hr className='navlink-hr'/>
        </NavLink>
        <NavLink to='/about' className='navlink'>
            <p>About</p>
            <hr className='navlink-hr'/>
        </NavLink>
        <NavLink to='/contact' className='navlink'>
            <p>Contact</p>
            <hr className='navlink-hr'/>
        </NavLink>
       </ul>
       <div className='icons'>
          <i class="fa-solid fa-magnifying-glass" id='search-icon'></i>
          
          <div className='icons-profile-div'>
              <i class="fa-regular fa-user fa-lg" id='profile-icon'></i>
              <div className='icons-profile-div-dropdown-menu'>
                  <div className='icons-list-div'>
                      <p className='icons-options'>My Profile</p>
                      <p className='icons-options'>Orders</p>
                      <p className='icons-options'>Logout</p>
                  </div>
              </div>
          </div>

          <Link to='/cart'>
          <div className='cart-link'>
          <i class="fa-solid fa-cart-shopping fa-lg" id='cart-icon'></i>
          <p className='cart-icon-number'>10</p>
          </div>
          </Link>
       </div>
    </div>
  )
}

export default Navbar
