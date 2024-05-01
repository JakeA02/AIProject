import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axiosInstance.post('/api/login/', { username, password });
          if (response.data.success) {
            // Login successful, redirect to the homepage
            window.location.href = '/home';
          } else {
            // Login failed, display an error message
            console.error('Login failed:', response.data.error);
          }
        } catch (error) {
          console.error('Login error:', error);
        }
      };
            

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
             <p>
           Don't have an account? <a href="/register">Register</a>
            </p>
         </div>
    
        
    );
    
}

export default LoginPage;