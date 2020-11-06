import React, { useState, useEffect } from 'react'
import "../styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });
  
    return () => {
      menuToggle.removeEventListener()
    }
  }, [])
  return (
    <nav className="navbar">
      <div className="menu-toggle">
        <div className="hamburger"></div>
      </div>
      <h1 className="navbar-brand">Navbar Here</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link active" href="/a">
            home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/b">
            JavaScript
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="c">
            CSS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
