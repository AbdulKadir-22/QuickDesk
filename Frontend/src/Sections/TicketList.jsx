
// src/components/TicketList.jsx
import React from 'react';
import TicketCard from './TicketCard';
import '../Styles/TicketList.css';

const TicketList = () => {
  return (
    <div className="ticket-list">
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default TicketList;
