// src/components/TicketCard.jsx
import React from 'react';
import '../Styles/TicketCard.css';

const TicketCard = () => {
  return (
    <div className="ticket-card">
      <h3>Is it a good thing to use AI for Hackathons ?</h3>
      <div className="meta-row">
        <span className="upvote">🔼 12</span>
        <span className="time">⏱ 6</span>
        <span className="category">🏷 Category</span>
      </div>
      <p className="posted">posted by someone123</p>
      <div className="status-row">
        <span className="status">🟢 Status</span>
        <span className="comment-icon">💬 9</span>
      </div>
    </div>
  );
};

export default TicketCard;
