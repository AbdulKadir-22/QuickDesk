// src/Components/TicketCard.jsx
import React from 'react';
import { FaThumbsUp, FaClock, FaCommentAlt } from 'react-icons/fa';
import '../Styles/TicketCard.css';

const TicketCard = ({ title, votes, time, category, status, comments, poster }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-details">
        <div className="ticket-title">{title}</div>
        <div className="ticket-meta">
          <div className="icon-text"><FaThumbsUp /> {votes}</div>
          <div className="icon-text"><FaClock /> {time}</div>
          <span className="category-badge">{category}</span>
        </div>
        <div className="poster-info">posted by {poster}</div>
      </div>
      <div className="ticket-right">
        <div className="status-badge">🟢 {status}</div>
        <div className="comment-icon"><FaCommentAlt /></div>
      </div>
    </div>
  );
};

export default TicketCard;
