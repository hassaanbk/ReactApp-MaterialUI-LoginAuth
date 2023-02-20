import React, { useState, useEffect }  from 'react';
import './Result.css'
import auth  from '../../auth/auth';

export default function Result() {

  let comment = localStorage.getItem('comment');
  return(
    <div className='result-wrapper'>
      <h1>Thank you {auth.getToken()}</h1>
      <h3>We appreciate your comments: {comment}</h3>
    </div>
   
  );
}