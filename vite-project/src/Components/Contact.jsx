import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where your MongoDB logic will eventually go!
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="contact-section">
        <div className="popup-cute">
          <h2>Yay! </h2>
          <p>Your message is on its way to the club. <br/> We'll get back to you soon, girl! 🎀</p>
          <button onClick={() => setSubmitted(false)} className="contact-btn">Send another?</button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="servicesTitle">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="How can we help you grow?" rows="5"></textarea>
          <button type="submit" className="contact-btn">Send Message </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;