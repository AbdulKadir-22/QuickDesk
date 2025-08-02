import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import StatCard from '../Components/StatCard';
import TicketItem from '../Components/TicketItem';
import '../Styles/Dashboard.css';
import { getToken } from '../utils/token';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
    const navigate = useNavigate();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = getToken(); // Get JWT from localStorage

        const response = await fetch('http://localhost:3000/api/tickets/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch tickets');
        }

        setTickets(data); // Set ticket list from API
      } catch (err) {
        console.error('Ticket fetch error:', err);
        setError('Could not load tickets. Please try again.');
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="dashboard">
      <Navbar />

      <div className="stats-section">
        <StatCard number={tickets.length} label="Tickets Raised" />
        <StatCard number={tickets.filter(t => t.status === 'closed').length} label="Tickets Resolved" />
        <StatCard number={tickets.reduce((total, t) => total + (t.message_thread?.length || 0), 0)} label="Questions Answered" />
       <div onClick={() => navigate('/raiseticket')} style={{ cursor: 'pointer' }}>
          <StatCard number="+" label="Raise Ticket" />
        </div>
      </div>

      <h2 className="section-title">Recent Tickets</h2>

      {error && <p className="error">{error}</p>}

      <div className="tickets-list">
        {tickets.map((ticket) => (
          <TicketItem
            key={ticket._id}
            title={ticket.title}
            user={ticket.created_by?.name || 'Unknown'}
            votes={ticket.upvotes - ticket.downvotes}
            replies={ticket.message_thread?.length || 0}
            status={ticket.status}
          />
        ))}
      </div>
    </div>
  );
}
