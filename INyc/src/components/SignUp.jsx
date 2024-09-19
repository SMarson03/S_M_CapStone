import React, { useEffect } from 'react';

import backgroundImage from './DesignImages/Background.jpg';
import secondaryBackgroundImage from './DesignImages/SignUpBackground.jpg';

import user_icon from './IconImages/UserIcon.png';
import mail_icon from './IconImages/MailIcon.png';
import password_icon from './IconImages/PasswordIcon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';




function SignUp() {
  
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!username || !email || !password) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };
  

  const submitData = async () => {
    if (!validateForm()) return;

      try {
        const response = await fetch('http://localhost:8080/api/INyc/SignUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    
    };


  return (
     
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className='container mx-auto text-center'>
        <div className="SignUpHeader gloria-hallelujah-regular" style={{
          fontSize: '100px', 
          textAlign: 'center'
        }}>
          {action}
        </div>
        <div style={{
          backgroundImage: `url(${secondaryBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          width: '600px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className='inputs'>
            {action==='Login'?<div></div>:<div className='input'>
            <img src={user_icon} style={{width: '20px',
            height: '20px'
            }}/>
            <input type='text' placeholder='Username'
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>}
            <div className='input'>
            <img src={mail_icon}
            style={{width: '20px',
              height: '20px'
              }}/>
            <input type='email' placeholder='Email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
            </div>
       <div className='input'>
            <img src={password_icon} 
            style={{width: '20px',
              height: '20px'
              }}/>
            <input type='password' placeholder='Password'
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        {error && <div className='error-message'>{error}</div>}
        {action=== 'Sign Up'?<div></div>:<div className='forgot-password'>Lost Password?<span>Click Here</span></div>}
             <div className='submit-container'>
          <div className={action==='Login'?'submit gray':'submit'}onClick={action=== 'Sign Up' ? submitData : ()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==='Sign Up'?'submit gray':'submit'}onClick={action=== 'Login' ? submitData : ()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
          
          
      </div>
    </div>
      </div>
  );
}

export default SignUp;