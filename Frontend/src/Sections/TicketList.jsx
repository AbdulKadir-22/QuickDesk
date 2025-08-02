// src/components/TicketList.jsx
import React from 'react';
import TicketCard from './TicketCard';
import '../Styles/TicketsPage.css';

const TicketList = () => {
  const tickets = [
    { id: 1, title: 'Is it a good thing to use AI for Hackathons ?', category: 'AI', upvotes: 12, downvotes: 6, user: 'someone123', status: 'Open' },
    { id: 2, title: 'Is it a good thing to use AI for Hackathons ?', category: 'AI', upvotes: 12, downvotes: 6, user: 'someone123', status: 'Open' },
    { id: 3, title: 'Is it a good thing to use AI for Hackathons ?', category: 'AI', upvotes: 12, downvotes: 6, user: 'someone123', status: 'Open' },
  ];

  return (
    <div className="ticket-list">
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} {...ticket} />
      ))}
    </div>
  );
};

export default TicketList;