import React, { useState } from 'react';
import '../styles/NewsletterForm.css';

const NewsletterForm = () => { // Renamed function to NewsletterForm
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the email to your server for processing
    // For this example, we'll simply set "subscribed" to true
    setSubscribed(true);
  };

  return (
    <div className="newsletter">
      {subscribed ? (
        <div className="newsletter__success-message">
          <p>Check your inbox!</p>
        </div>
      ) : (
        <div>
          <h2 className="newsletter__title">Subscribe to The Spitball</h2>
          <p className="newsletter__description">
            Stay up-to-date with our latest news and updates.
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

