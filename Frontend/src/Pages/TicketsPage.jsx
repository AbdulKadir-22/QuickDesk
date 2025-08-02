// src/pages/TicketsPage.jsx
import React from 'react';
import Filters from '../Sections/Filters';
import SearchBar from '../Sections/SearchBar';
import TicketList from '../Sections/TicketList';
import '../Styles/TicketsPage.css';
import Navbar from '../Components/Navbar';

const TicketsPage = () => {
  return (
    <>
      <Navbar/>
    <div className="tickets-page">
      <Filters />
      <SearchBar />
      <TicketList />
    </div>
    </>
  );
};

export default TicketsPage;
