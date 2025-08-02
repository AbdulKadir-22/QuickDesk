import React, { useState } from 'react';
// import './RaiseTicket.css'; // Ensure your styles are in this file

const RaiseTicket = () => {
  const [formData, setFormData] = useState({
    question: '',
    description: '',
    category: 'Technical',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket Submitted:', formData);
    // You can later connect this to your backend
  };

  return (
    <>
        <div className="raise-ticket-container">
        <h2 className="raise-title">
            Ask Question <span className="tooltip-icon">❓</span>
        </h2>

        <form className="ticket-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="question">Question</label>
            <input
                type="text"
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                required
            ></textarea>
            </div>

            <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
            >
                <option value="Technical">Technical</option>
                <option value="HR">HR</option>
                <option value="Billing">Billing</option>
            </select>
            </div>

            <button type="submit" className="submit-btn">Post</button>
        </form>
        </div>
    </>
  );
};

export default RaiseTicket;
