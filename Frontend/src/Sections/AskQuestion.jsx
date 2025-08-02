import React from "react";
import "../Styles/AskQuestion.css";
// src/Sections/AskQuestion.js


const AskQuestionForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form className="ask-form" onSubmit={handleSubmit}>
      <h2>Raise a New Ticket</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Brief title of your issue"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Explain the issue in detail"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="network">Network</option>
          <option value="hardware">Hardware</option>
          <option value="software">Software</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit">Submit Ticket</button>
    </form>
  );
};

export default AskQuestionForm;
