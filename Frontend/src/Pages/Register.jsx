// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Register.css';
import sidepanel from '../assets/sidepanel.png'
import logo from '../assets/logo.png'; // ✅ your logo file

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      alert('Registration Successful!');
      navigate('/');
    }
  };

  return (
    <div className="container">
      <div className="register-box">
        <img src={logo} alt="QuickDesk Logo" className="logo" /> {/* ✅ Logo Here */}
        <h1>Register</h1>
        <p>Sign Up. Speak Up. Get Help.</p>

        {error && <div className="error">{error}</div>}

        <div className="input-group">
          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Name" />
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
          </div>

          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" />
            <input type="email" name="email" placeholder="E-Mail" onChange={handleChange} />
          </div>

          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Password" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          </div>

          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Confirm Password" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
          </div>
        </div>

        <button className="register-btn" onClick={handleRegister}>Register</button>

        <div className="signup">
          Already have an account? <span onClick={() => navigate('/')}>Login</span>
        </div>
      </div>

      <div className="image-box">
        <img src={sidepanel} alt="Register Visual" />
      </div>
    </div>
  );
}
