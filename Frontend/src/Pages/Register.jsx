import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Register.css';
import sidepanel from '../assets/sidepanel.png';
import logo from '../assets/logo.png';
import { setToken } from '../utils/token'; // ✅ Import token setter

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
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

    try {
      setLoading(true);
      setError('');

      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role: 'end_user',
          categories: [],
          profileImage: `https://i.pravatar.cc/300?u=${email}`,
        }),
      });

      const data = await response.json();
      console.log(data)
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // ✅ Save JWT token in localStorage
      setToken(data.token);

      alert('Registration successful!');
      navigate('/');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="register-box">
        <img src={logo} alt="QuickDesk Logo" className="logo" />
        <h1>Register</h1>
        <p>Sign Up. Speak Up. Get Help.</p>

        {error && <div className="error">{error}</div>}

        <form className="input-group" onSubmit={handleRegister}>
          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Name" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>

          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Password" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>

          <div className="input-field">
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Confirm Password" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={formData.confirmPassword}
              required
            />
          </div>

          <button className="register-btn" type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className="signup">
          Already have an account?{' '}
          <span onClick={() => navigate('/')}>Login</span>
        </div>
      </div>

      <div className="image-box">
        <img src={sidepanel} alt="Register Visual" />
      </div>
    </div>
  );
}
