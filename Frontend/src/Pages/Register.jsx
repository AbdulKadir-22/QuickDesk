// src/Register.js
import React, { useState } from 'react';
import '../Styles/Register.css'; // use the provided CSS

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate success (replace with real logic)
    alert('Registration successful!');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setError('');
    // window.location.href = '/Login'; // optional redirection
  };

  return (
    <div className="container">
      <div className="register-box">
        <h1>Register Account</h1>
        <p>Enter your information to get started</p>

        {error && <div className="error">{error}</div>}

        <div className="input-group">
          <div className="input-field">
            <img
              src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
              alt="name icon"
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="email icon"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt="password icon"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt="confirm password icon"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="register-btn" onClick={handleSubmit}>
          Register
        </button>

        <div className="signup">
          Already have an account? <span>Login</span>
        </div>
      </div>

      <div className="image-box">
        <img
          src="C:\Users\faiza\OneDrive\Desktop\QuickDesk\Frontend\src\assets\side_panel_registeration.png"
          alt="QuickDesk Illustration"
        />
      </div>
    </div>
  );
};

export default Register;
