import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import secondaryBackgroundImage from './DesignImages/SignUpBackground.jpg';
import mail_icon from './IconImages/MailIcon.png';
import password_icon from './IconImages/PasswordIcon.png';
import user_icon from './IconImages/UserIcon.png';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:8080/INyc/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed.');
        return;
      }

      // Optionally, you can redirect to the login page on successful signup
      navigate('/LogIn');
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
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
        <h1 className="SignUpHeader" style={{ fontSize: '100px', textAlign: 'center', color: 'gold',
          fontFamily: 'Gloria Hallelujah', marginBottom: '20px'
         }}>Sign Up</h1>
        <form className='inputs' onSubmit={submitData}>
          {error && <p className='text-red-500'>{error}</p>}
          <div className='input'>
            <img src={user_icon} style={{ width: '20px', height: '20px' }} alt="User Icon" />
            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className='input'>
            <img src={mail_icon} style={{ width: '20px', height: '20px' }} alt="Mail Icon" />
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='input'>
            <img src={password_icon} style={{ width: '20px', height: '20px' }} alt="Password Icon" />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className='submit-container'>
            <button type='submit' className='submit'>Sign Up</button>
          </div>
          <div className='submit-container'>
            <Link to='/LogIn' style={{color: 'white'}}>Already have an account? Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
