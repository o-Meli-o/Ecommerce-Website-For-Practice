import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
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
    </div>
  )
}

export default Navbar
