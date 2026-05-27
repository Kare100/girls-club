import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
    // This line is what "remembers" you across the whole site
    localStorage.setItem('username', data.user); 
    
    console.log("Session saved for:", data.user); // Add this to debug
    alert("🔓 Login Successful! Welcome back.");
    navigate('/'); 
      
      } else {
        alert("🛑 Error: " + data.message);
      }
    } catch (error) {
      alert("Cannot reach server!");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Login to the Club</h2>
        <form onSubmit={handleLogin} className="signup-form">
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Login</button>
        </form>
        <p style={{marginTop: '15px', fontSize: '14px'}}>
          Not a member? <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => navigate('/signup')}>Sign up here</span>
        </p>
      </div>
    </div>
  );
}