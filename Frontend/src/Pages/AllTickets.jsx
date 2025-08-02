// src/pages/AskQuestion.jsx
import React from 'react';
import '../Styles/Alltickets.css';

const AskQuestion = () => {
  return (
    <div className="ask-question-container">
      <div className="question-header">
        <h2 className="question-title">Is it a good thing to use AI for Hackathons?</h2>
        <div className="question-meta">
          <div className="votes">
            <span className="upvote">🔼</span>
            <span>12</span>
            <span className="downvote">🔽</span>
            <span>6</span>
          </div>
          <span className="category-badge">🟠 Category</span>
        </div>
        <p className="posted-by">posted by someone123</p>
      </div>

      <button className="reply-button">Reply</button>
    </div>
  );
};

export default AllTickets;
