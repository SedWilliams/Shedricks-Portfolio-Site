import React, { useState } from 'react';
import '../styles/NewsletterForm.css';
import supabase from '../supabase';
import { Post } from '../supabase';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);  
  const [changed, setChanged] = useState(0);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setChanged(changed + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(changed != 0) {
        Post(email);
        setSubscribed(true);
    } else {
        console.log("No email detected.");
    }
  };

  return (
    <div className="newsletter">
      {subscribed ? (
        <div className="newsletter__success-message">
          <p>Expect some value in your inbox!</p>
        </div>
      ) : (
        <div>
          <h2 className="newsletter__title">Subscribe to The Spitball</h2>
          <p className="newsletter__description">
            And receive extensive programming notes and cheatsheets, for technologies like JavaScript, React, HTML, CSS, Python, Rust, and various backend tooling!           
          </p>
          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="newsletter__input"
            />
            <button type="submit" className="newsletter__button">
              Subscribe
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm; // Updated export name to NewsletterForm

