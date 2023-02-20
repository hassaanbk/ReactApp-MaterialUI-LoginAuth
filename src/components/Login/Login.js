import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import auth  from '../../auth/auth';
import './Login.css';

export default function Login(props) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
  const handleSubmit = e => {
    e.preventDefault();
    auth.onAuthentication();
    auth.saveToken(email);
    props.history.push('/comment');
  };
    return(
        <div className='login-wrapper'>
      <h1>Login to evaluate the course:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:
          <input type="text" onChange={e => setEmail(e.target.value)}/>
          </p>
        </label>
        <label>
          <p>Password:
          <input type="password" onChange={e => setPassword(e.target.value)}/>
          </p>
        </label>
        <div>
          <button type="submit"  className='button'>Login</button>
        </div>
      </form>
      </div>
    )
  }
  
