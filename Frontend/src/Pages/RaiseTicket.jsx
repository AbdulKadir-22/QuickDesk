import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import AskQuestionForm from '../Sections/AskQuestion';
import { getToken } from '../utils/token'; // ✅ Import token helper

const RaiseTicket = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'network',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = getToken();

    if (!token) {
      setError('You must be logged in to raise a ticket.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/tickets/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create ticket.');
      }

      setSuccess('Ticket submitted successfully!');
      setFormData({ title: '', description: '', category: 'network' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="ask-question-container">
        <AskQuestionForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </>
  );
};

export default RaiseTicket;
