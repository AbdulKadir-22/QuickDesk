// src/components/Navbar.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isAllTicketsPage = location.pathname === '/all-tickets';

  return (
    <nav className="navbar vertical-navbar">
      <div className="logo-container">
        <img src={logo} alt="QuickDesk Logo" className="logo" />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/RaiseTicket" className={({ isActive }) => (isActive ? 'active' : '')}>
            Raise Ticket
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-tickets" className={({ isActive }) => (isActive ? 'active' : '')}>
            All Tickets
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => (isActive ? 'active' : '')}>
            Notifications
          </NavLink>
        </li>
      </ul>

      {isAllTicketsPage && (
        <div className="filter-box">
          <label htmlFor="filter">Filter:</label>
          <select id="filter" className="filter-dropdown">
            <option value="">All</option>
            <option value="open">Open</option>
            <option value="inprogress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      )}
    </nav>
  );
}
