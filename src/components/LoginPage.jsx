import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../style/LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Password:', rememberPassword);
    // Add your login logic here

    // Redirect to the home page
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>By signing in you are agreeing to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <div className="remember-forget">
          <label>
            <input
              type="checkbox"
              checked={rememberPassword}
              onChange={() => setRememberPassword(!rememberPassword)}
            />
            Remember password
          </label>
          <a href="#">Forget password?</a>
        </div>

        <button type="submit">Login</button>

        <p>or connect with</p>
        <button type="button" className="touch-id">
          <div className="touch-id-inner">
            Touch ID
          </div>
          
        </button>
      </form>

      <p>Don't have an account? <a href="#">Register</a></p>
    </div>
  );
};

export default Login;
