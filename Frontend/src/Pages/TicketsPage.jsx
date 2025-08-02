// src/pages/TicketsPage.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Filters from '../Sections/Filters';
import SearchBar from '../Sections/SearchBar';
import TicketList from '../Sections/TicketList';
// import '../Styles/TicketsPage.css';


const TicketsPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="tickets-page">
      <Filters />
      <SearchBar />
      <TicketList />
    </div>
    </div>
  );
};

export default TicketsPage;
