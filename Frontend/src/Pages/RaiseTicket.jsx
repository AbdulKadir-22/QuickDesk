import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import AskQuestionForm from '../Sections/AskQuestion';
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
        <Navbar/>
        <AskQuestionForm/>
    </>
  );
};

export default RaiseTicket;
