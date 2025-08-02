// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Dashboard.css';

export default function Navbar() {
  return (
    <nav className="navbar vertical-navbar">
      <div className="logo-container">
        <img src={logo} alt="QuickDesk Logo" className="logo" />
      </div>

      <ul className="nav-links">
        <li className="active">Dashboard</li>
        <li>Raise Ticket</li>
        <li>All Tickets</li>
        <li>Profile</li>
        <li>Notifications</li>
      </ul>
    </nav>
  );
}
