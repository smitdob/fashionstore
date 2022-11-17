import React from 'react'
import { logo } from '../../AppData/CommonData'
import { NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import './Header.css'
const Header = () => {
  return (
    <>
      <div className="header-main-wrapper">
        <div className="header-top-wrapper custom-container">
          <div className="top-header-left">
            <h4 className='top-header-left-upper-text'> 24/7 customer support</h4>
            <div className="top-header-left-bottom-wrapper">
              <span className='headfon-logo'><i className="fa-solid fa-headphones-simple"></i></span>
              <h4 className='top-header-left-bottom-text'>1-001-234-567</h4>
            </div>
          </div>
          <div className="top-header-middle">
            <NavLink to='/'> 
              <img src={logo} alt='brand logo' width="400" height="100"/>
            </NavLink>
          </div>
          <div className="top-header-right">
            <div className="search curpo">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="user curpo">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="cart curpo">
              <Badge badgeContent={4} color="primary"><i className="fa-solid fa-bag-shopping"></i></Badge>
            </div>
          </div>
        </div>
        <div className="header-bottom-wrapper custom-container">
          <nav className='header-navlink'>
            <ul className='header-ul'>
              <li><NavLink className='header-navlink' to='/'>Home</NavLink></li>
              <li><NavLink className='header-navlink' to='/filter'>New incomes</NavLink></li>
              <li><NavLink className='header-navlink' to='/filter'>Clothing</NavLink></li>
              <li><NavLink className='header-navlink' to='/filter'>Shoes</NavLink></li>
              <li><NavLink className='header-navlink' to='/filter'>Accessories</NavLink></li>
              <li><NavLink className='header-navlink' to='/sale'>Sale</NavLink></li>
              <li><NavLink className='header-navlink' to='/blog'>Blog</NavLink></li>
              <li><NavLink className='header-navlink' to='/info'>Info</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header