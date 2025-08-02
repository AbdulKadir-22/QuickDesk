// src/pages/ProfilePage.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Navbar/>
      <div className="profile-container">
        <div className="profile-left">
          <img
            src="https://i.pravatar.cc/200?img=52"
            alt="Profile"
            className="profile-avatar"
          />
        </div>

        <div className="profile-right">
          <div className="info-group">
            <span className="info-label">Username</span>
            <button className="btn-edit">Update Username</button>
          </div>

          <div className="info-group">
            <span className="info-label">Email Address</span>
            <button className="btn-edit">Update Email</button>
          </div>

          <div className="info-group">
            <span className="info-label">Role :</span>
            <span className="role-value">User</span>
          </div>

          <button className="btn-edit full-btn">Update Role</button>
          <button className="btn-edit full-btn">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
