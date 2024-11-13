import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!validateForm()) {
      return;
    }

    try {
      // Send the form data to your email service
      await sendEmail({ name, email, message });

      // Reset the form fields
      setName('');
      setEmail('');
      setMessage('');

      // Show the success alert
      setShowSuccessAlert(true);
      setFormError('');
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle the error, such as showing an error message
    }
  };

  const validateForm = () => {
    if (!name) {
      setFormError('Name is required.');
      return false;
    }
    if (!email) {
      setFormError('Email is required.');
      return false;
    }
    if (!validateEmail(email)) {
      setFormError('Email is not valid.');
      return false;
    }
    if (!message) {
      setFormError('Message is required.');
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = async (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    try {
      await emailjs.send(
        'service_vayzh7v',
        'template_y2595wc',
        templateParams,
        'YD8guwV5HYYSb5aHO'
      );
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h3 className="contact-heading">GET IN TOUCH</h3>
        <h2 className="contact-title">Contact.</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          {formError && <p className="form-error">{formError}</p>}
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="What's your name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="What's your email?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            placeholder="What's your message?"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit" className="contact-button">
            SEND
          </button>
        </form>
      </div>

      {showSuccessAlert && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3 className="popup-title">Email Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
            <button
              onClick={() => setShowSuccessAlert(false)}
              className="popup-close-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
