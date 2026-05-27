import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import './SignUp.css'; 

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 2. Initialize the navigate function

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Attempting to save to database...");

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✨ SUCCESS: " + data.message);
        
        // 3. TELEPORT TO LOGIN
        navigate('/login'); 
        
      } else {
        alert("Server Error: " + data.message);
      }
    } catch (error) {
      console.error("Fetch Connection failed:", error);
      alert("Cannot reach server. Make sure node index.js is running!");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Join The Girls Club</h2>
        <form onSubmit={handleSignUp} className="signup-form">
          <input 
            type="text" 
            placeholder="Enter Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Sign Up</button>
        </form>
        {/* Optional: Add a link for people who already have an account */}
        <p style={{marginTop: '15px', fontSize: '14px'}}>
          Already a member? <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => navigate('/login')}>Login here</span>
        </p>
      </div>
    </div>
  );
}