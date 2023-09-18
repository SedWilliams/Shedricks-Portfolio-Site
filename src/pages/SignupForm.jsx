import React, { useState } from 'react';
import '../styles/SignupForm.css';
import { Navbar } from '../components/Navbar';
import supabase, { Post } from '../supabase';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [changed, setChanged] = useState(0);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setChanged(changed + 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(changed != 0) {
        Post(email);
        setIsSubscribed(true);
    } else {
        console.log("No email detected.");
    }
  };

  return (
    <div>
        <Navbar />
    
        <div className='signup-form__container'>
                <div className="signup-form">
                    {!isSubscribed ? (
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                <h1 style={{margin: '0px'}}>Enter your email</h1><br/>
                                <p style={{margin: '0px 0px 20px 0px'}}>To pre-order the Planning Framework!</p>
                                <input
                                    type="email"
                                    placeholder="example@example.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </label>
                            <button type="submit">Pre-order</button>
                        </form>
                    ) : (
                        <div className="confirmation-message">
                            <h1> I'm excited to <span style={{color: '#ED461D'}}>connect with you.</span> You'll be the first to be notified once the Planning Framework drops.</h1>
                            <a href="https://shedrickwilliams.live"><button style={{color: 'black'}}> <span style={{color: '#E0E0E0'}}>Home</span></button></a>
                        </div>
                    )}
                </div>
        </div>

    </div>
  );
}

export default SignupForm;
