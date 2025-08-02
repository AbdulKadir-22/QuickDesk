// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../Pages/Register';
import HomePage from '../Pages/HomePage'; // if you use this later
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';

const AppRoutes = () => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
