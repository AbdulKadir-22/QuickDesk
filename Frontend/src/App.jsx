// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import AllTickets from './Pages/AllTickets';

function App() {
  return (
    <Router>
      <AllTickets/>
      {/* <Routes /> */}
    </Router>
  );
}

export default App;
