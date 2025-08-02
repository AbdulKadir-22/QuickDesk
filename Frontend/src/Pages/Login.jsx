import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import loginImage from '../assets/loginimg.png'; // Replace with your image path
import logo from '../assets/logo.png'; // Replace with your logo path

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login logic
    if (formData.email && formData.password) {
      localStorage.setItem('loggedIn', 'true'); // Store login status
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Login Illustration" className="illustration" />
      </div>

      <div className="login-right">
        <div className="logo-heading">
          <img src={logo} alt="QuickDesk" className="logo-small" />
          <span className="logo-text">QuickDesk</span>
        </div>
        <div className='login-head'>
          <h2>Login</h2>
          <p className="sub-heading">Log In. Follow Up. Stay Informed.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Password" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          New to <span className="quickdesk-text">QuickDesk</span>? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
