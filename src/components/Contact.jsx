import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://portfolio-backend-3c2a.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="contact-page container">
      <div className="contact-header">
        <h1 className="contact-title font-display">START A<br />PROJECT <span className="red-star">✦</span></h1>
        <p className="contact-subtitle">Fill out the form below and I'll get back to you within 24 hours.</p>
      </div>

      <div className="contact-form-container">
        {status === 'success' ? (
          <div className="success-message">
            <h3 className="success-title">Message Received!</h3>
            <p>Thank you for reaching out. I'll be in touch soon.</p>
            <button className="reset-btn" onClick={() => setStatus('idle')}>Send another message</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="hello@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Tell me about your project..." 
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>
            </div>

            {status === 'error' && <p className="error-text">{errorMessage}</p>}

            <button type="submit" className="submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
