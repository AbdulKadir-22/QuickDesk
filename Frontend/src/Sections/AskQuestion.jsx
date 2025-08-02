import React from "react";
import "./AskQuestionForm.css";

const AskQuestionForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">
        Ask Question <span className="info-icon">❓</span>
      </h2>

      <form className="ask-form">
        <label>Question</label>
        <input type="text" className="input" placeholder="Type your question..." />

        <label>Description</label>
        <textarea className="textarea" placeholder="Add more details..."></textarea>

        <label>Category</label>
        <select className="input">
          <option value="technical">Technical</option>
          <option value="non-technical">Non-Technical</option>
        </select>

        <button type="submit" className="post-btn">Post</button>
      </form>
    </div>
  );
};

export default AskQuestionForm;
