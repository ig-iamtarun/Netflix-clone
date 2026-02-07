import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  const navref = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add('nav-dark')
      } else {
        navref.current.classList.remove('nav-dark')
      }
    })
  }, [])

  return (
    <div ref={navref} className="navbar-container">
      <div className="navbar-content">
        {/* Left side: Logo + Navigation Links */}
        <div className="navbar-left">
          <img src={logo} alt="Netflix Logo" className="navbar-logo" />
          
          <ul className="navbar-menu">
            <li className="navbar-menu-item">Home</li>
            <li className="navbar-menu-item">TV Shows</li>
            <li className="navbar-menu-item">Movies</li>
            <li className="navbar-menu-item">New & Popular</li>
            <li className="navbar-menu-item">My List</li>
            <li className="navbar-menu-item">Browse by Languages</li>
          </ul>
        </div>

        {/* Right side: Search, Children, Bell, Profile */}
        <div className="navbar-right">
          <img src={search_icon} alt="Search" className="navbar-icon" />
          <p className="navbar-children">Children</p>
          <img src={bell_icon} alt="Notifications" className="navbar-icon" />
          
          <div 
            className="navbar-profile"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img src={profile_img} alt="Profile" className="profile-img" />
            <img src={caret_icon} alt="Dropdown" className={`caret-icon ${showDropdown ? 'rotate' : ''}`} />
            
            {showDropdown && (
              <div className='dropdown'>
                <p onClick={() => logout()}>Sign Out of Netflix</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar