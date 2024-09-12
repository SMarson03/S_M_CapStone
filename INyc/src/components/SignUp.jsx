import React from 'react';

import backgroundImage from './DesignImages/Background.jpg';
import secondaryBackgroundImage from './DesignImages/SignUpBackground.jpg';

import user_icon from './IconImages/UserIcon.png';
import mail_icon from './IconImages/MailIcon.png';
import password_icon from './IconImages/PasswordIcon.png';
import { useState } from 'react';




function SignUp() {
  
  const [action, setAction] = useState('Sign Up');

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
            <input type='text' placeholder='Username'/>
        </div>}
            <div className='input'>
            <img src={mail_icon}
            style={{width: '20px',
              height: '20px'
              }}/>
            <input type='email' placeholder='Email'/>
            </div>
       <div className='input'>
            <img src={password_icon} 
            style={{width: '20px',
              height: '20px'
              }}/>
            <input type='password' placeholder='Password'/>
        </div>
        {action=== 'Sign Up'?<div></div>:<div className='forgot-password'>Lost Password?<span>Click Here</span></div>}
             <div className='submit-container'>
          <div className={action==='Login'?'submit gray':'submit'}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==='Sign Up'?'submit gray':'submit'}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
          
          
      </div>
    </div>
      </div>
  );
}

export default SignUp;