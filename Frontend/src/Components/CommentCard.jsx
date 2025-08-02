// src/components/CommentCard.jsx
import React from 'react';
import '../Styles/CommentCard.css';

const CommentCard = ({ avatarUrl, username, comment }) => {
  return (
    <div className="comment-card">
      <div className="comment-left">
        <img src={avatarUrl} alt="avatar" className="avatar" />
        <span className="username">{username}</span>
      </div>
      <div className="comment-content">
        {comment}
      </div>
      <button className="reply-button">Reply</button>
    </div>
  );
};

export default CommentCard;

