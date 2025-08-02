// src/pages/AskQuestionPage.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import CommentCard from '../Components/CommentCard';
import '../Styles/AllTickets.css';

const AllTickets = () => {
  return (
    <div className="ask-question-page">
      <Navbar />

      <div className="question-container">
        <h2 className="question-title">
          Is it a good thing to use AI for Hackathons?
          <span className="status-indicator">● Status</span>
        </h2>

        <div className="question-meta">
          <div className="votes">
            <span>🔼 12</span>
            <span>🔽 6</span>
          </div>
          <span className="category-tag">Category</span>
          <span className="posted-by">posted by someone123</span>
        </div>

        <div className="question-buttons">
          <button className="btn btn-reply">Reply</button>
          <button className="btn btn-resolve">Resolve</button>
          <button className="btn btn-assign">Assign</button>
        </div>

        <h3 className="comments-heading">Comments</h3>

        <CommentCard
          username="supervisor321"
          avatarUrl="https://i.pravatar.cc/40?img=12"
          commentText="Don’t say actually....."
        />
      </div>
    </div>
  );
};

export default AllTickets;