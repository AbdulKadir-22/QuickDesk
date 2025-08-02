import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';
import loginImage from '../assets/loginimg.png'; // Replace with your image path
import logo from '../assets/logo.png'; // Replace with your logo path

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
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
          <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Confirm Password" />
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
