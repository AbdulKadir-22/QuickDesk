// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import TicketsPage from './Pages/TicketsPage';
import RaiseTicket from './Pages/RaiseTicket';
import AllTickets from './Pages/AllTickets';
import ProfilePage from './Pages/ProfilePage';

const AppRoutes = () => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/raiseticket" element={<RaiseTicket />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route path="/ticketsPage" element={<TicketsPage/>}/>
      <Route path="/allTickets" element={<AllTickets/>}/>
      <Route path="/profilePage" element={<ProfilePage/>}/>
    </Routes>
  );
};

export default AppRoutes;