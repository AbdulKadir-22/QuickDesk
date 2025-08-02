// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/HomePage" element={<HomePage />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
