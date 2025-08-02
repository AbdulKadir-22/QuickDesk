import Navbar from '../Components/Navbar';
import StatCard from '../Components/StatCard';
import TicketItem from '../Components/TicketItem';
import '../Styles/Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />

      <div className="stats-section">
        <StatCard number={12} label="Tickets Raised" />
        <StatCard number={8} label="Tickets Resolved" />
        <StatCard number={22} label="Questions Answered" />
        <StatCard number="+" label="Raise Ticket" />
      </div>

      <h2 className="section-title">Recent Tickets</h2>

      <div className="tickets-list">
        <TicketItem
          title="Is it a good thing to use AI for Hackathons ?"
          user="someone123"
          votes={12}
          replies={6}
          status="open"
        />
        <TicketItem
          title="Is it a good thing to use AI for Hackathons ?"
          user="someone123"
          votes={10}
          replies={9}
          status="open"
        />
      </div>
    </div>
  );
}
