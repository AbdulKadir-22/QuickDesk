export default function TicketItem({ title, user, votes, replies, status }) {
  return (
    <div className="ticket-card">
      <div className="ticket-content">
        <h3>{title}</h3>
        <div className="ticket-meta">
          <span className="category">🟠 Category</span>
          <div className="ticket-icons">
            <span>🔼 {votes}</span>
            <span>🕒</span>
            <span>{replies}</span>
          </div>
        </div>
        <p className="posted-by">posted by {user}</p>
      </div>
      <div className="ticket-status">
        <span className="status-indicator">🟢 Status</span>
        <div className="reply-icon">💬 {replies}</div>
      </div>
    </div>
  );
}
