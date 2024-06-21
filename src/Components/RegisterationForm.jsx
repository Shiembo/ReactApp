import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RegistrationContext } from '../contexts/RegistrationContext';

const RegistrationForm = () => {
  const { setIsRegistered } = useContext(RegistrationContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const predefinedUsername = "Userjeffj";
  const predefinedPassword = "jeffjPass";

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    // Make a mock registration request
    await axios.post('https://jsonplaceholder.typicode.com/posts', {
      username: username,
      password: password,
    });

    // Validate against predefined values
    if (username === predefinedUsername && password === predefinedPassword) {
      setMessage("Registration successful!");
      
      
      navigate('/'); // Navigate to home page
    } else {
      setMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
