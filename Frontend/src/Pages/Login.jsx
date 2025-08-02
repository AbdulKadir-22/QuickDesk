import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import loginImage from '../assets/loginimg.png';
import logo from '../assets/logo.png';
import { setToken } from '../utils/token'; // ✅ import token setter

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please enter valid credentials');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // ✅ Save JWT token to localStorage
      setToken(data.token);

      // Optionally: Save user data too, e.g. localStorage.setItem('user', JSON.stringify(data.user))

      // ✅ Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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

        <div className="login-head">
          <h2>Login</h2>
          <p className="sub-heading">Log In. Follow Up. Stay Informed.</p>
        </div>

        {error && <div className="error">{error}</div>}

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

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="register-link">
          New to <span className="quickdesk-text">QuickDesk</span>? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
