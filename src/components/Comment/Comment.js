import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Comment.css';

export default function Comment(props) {

 
  const [comment, setComment] = useState();
  const [email, setEmail] = useState();
 // let loggedEmail = auth.getToken();

  useEffect(() => {
    const loggedInUser = auth.getToken();
   
  //  setEmail(loggedInUser);
   if (loggedInUser!=="") {
        setEmail(loggedInUser);
    }
},[]);

  const handleSubmit = e => {
    e.preventDefault();
   // auth.onAuthentication();
    props.history.push('/result');
    localStorage.setItem('comment', comment);
    console.log(comment);
    
  };
  
    return(
       
        <div className="comment-wrapper">
      <form onSubmit={handleSubmit}>
      <label>
          <p>Course Code:
          <input type="text" defaultValue = "" disabled = {false}/>
          </p>
        </label>
        <label>
          <p>Course Name:
          <input type="text" defaultValue = "" disabled = {false}/>
          </p>
        </label>
        <label>
          <p>Student Email:
          <input type="text" defaultValue ={email} disabled = {false}/>
          </p>
        </label>
        <label>
          <p>Your comments:
          <textarea onChange={e => setComment(e.target.value)} rows={5}/>
          </p>
        </label>
       
        <div>
          <button type="submit" className='button'>Submit</button>
        </div>
      </form>
      </div>
    )
  }
  