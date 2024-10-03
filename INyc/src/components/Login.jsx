import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import secondaryBackgroundImage from './DesignImages/SignUpBackground.jpg';
import mail_icon from './IconImages/MailIcon.png';
import password_icon from './IconImages/PasswordIcon.png';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = (user) => {
    // Logic to handle user login (e.g., save user info to state or context)
    console.log('User logged in:', user);
  };

  const login = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        // other options like headers and body
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      handleLogin(data.user); // This should now work
      navigate('/home'); // Redirect to home page on successful login
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`http://localhost:8080/INyc/Login/${email}`, { // Adjust this endpoint as necessary
        method: 'POST',  // Use POST or GET as per your backend requirements
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed.');
        return;
      }

      const data = await response.json();
      // Handle the successful login, e.g., save user info, call handleLogin, etc.
      handleLogin(data.user); // Assuming the API returns user data
      navigate('/home'); // Redirect to home page on successful login
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (

    <>
    <div style={{ 
      backgroundImage: `url(${secondaryBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className='form-container'>
        <h1 className="LoginHeader" style={{ fontSize: '100px', textAlign: 'center', color: 'gold',
          fontFamily: 'Gloria Hallelujah', marginBottom: '20px'
         }}>Log In</h1>
        <form className='inputs' onSubmit={handleSubmit}>
          {error && <p className='text-red-500'>{error}</p>}
          <div className='input'>
            <img src={mail_icon} style={{ width: '20px', height: '20px' }} alt="Mail Icon" />
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='input'>
            <img src={password_icon} style={{ width: '20px', height: '20px' }} alt="Password Icon" />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className='submit-container'>
            <button type='submit' className='submit'>Log In</button>
          </div>
          <div className='submit-container'>
            <Link to='/SignUp'style={{color: 'white'}}>Don't have an account? Sign Up</Link>
          </div>
        </form>
        </div>
      </div>
     
        </>
  );
}

export default Login;