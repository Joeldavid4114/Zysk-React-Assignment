import React from 'react'


const Navbar = () => {
  return (
    
      
      
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img  className= 'logos' src="./assets/images zysk.png" alt="Zysk logo" /></div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#products">Products
          </a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="profile">
          <img src="./assets/prof.png" alt="Profile" className="profile-icon" />
        </div>
      </header>
    </div>
  )
}

export default Navbar
