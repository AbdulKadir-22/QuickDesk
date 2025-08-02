export default function StatCard({ number, label, icon }) {
  return (
    <div className="stat-card">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}
