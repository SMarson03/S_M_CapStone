import React from 'react'

function Login() {
  
    const [action, setAction] = useState('Sign Up');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const decryptPass = async (encryptedPass, key, iv)=>{
      const decoder = new TextDecoder();
      const importedKey = await crypto.importedKey(
        'raw',
        Uint8Array.from(atob(key), c => c.charCodeAt(0)),
        {name: 'AES-GCM', length: 256},
        false,
        ['decrypt']
      );
      const decryptedData = await crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: Uint8Array.from(atob(iv), (c) => c.charCodeAt(0)),
        },
        importedKey,
        Uint8Array.from(atob(encryptedPass), (c) => c.charCodeAt(0))
      );
      return decoder.decode(decryptedData);
    };
  
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
  
        try {
  
          // Register here it would go the the backend and get stored in the db
          const storedUser = JSON.parse(localStorage.getItem('user'));
  
          if (!storedUser) {
            setError('User not found.');
            return;
          }
  
          const decryptedPass = await decryptPass(storedUser.password, 
            storedUser.key, storedUser.iv);
  
            if(storedUser.email === email && decryptedPass === password){
              console.log('You are INyc!');
              handleLogin();
            }else{
              setError('Invalid email or password.');
            }
      } catch (error) {
        console.error("Login error: ", error);
        setError('An error occurred. Please try again.');
      }
    };
   
    const validateForm = () => {
      if (!username || !email || !password) {
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
          const response = await fetch('http://localhost:8080/api/INyc/Login', {
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
          {action === 'Login' ? null : (
            <div className='input'>
              <img src={user_icon} style={{ width: '20px', height: '20px' }} />
              <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className='input'>
            <img src={mail_icon} style={{ width: '20px', height: '20px' }} />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input'>
            <img src={password_icon} style={{ width: '20px', height: '20px' }} />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className='error-message'>{error}</div>}
          {action === 'Sign Up' ? null : (
            <div className='forgot-password'>Lost Password?<span>Click Here</span></div>
          )}
          <div className='submit-container'>
            <div
              className={action === 'Login' ? 'submit gray' : 'submit'}
              onClick={action === 'Sign Up' ? submitData : () => { setAction("Sign Up") }}
            >
              Sign Up
            </div>
            <div
              className={action === 'Sign Up' ? 'submit gray' : 'submit'}
              onClick={action === 'Login' ? handleSubmit : () => { setAction("Login") }}
            >
              Login
            </div>
          </div>
        </div>
      </div>  
    </div>
    </div>
        
      );
    }
    
      export default Login;