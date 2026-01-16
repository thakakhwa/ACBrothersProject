import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with Drupal backend API
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact">
      {/* Page Header */}
      <section className="contact__header">
        <div className="container">
          <h1 className="contact__title">Contact Us</h1>
          <p className="contact__subtitle">
            Get in touch with us for a free quote or any questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact__content section">
        <div className="container">
          <div className="contact__grid">
            {/* Contact Form */}
            <div className="contact__form-container">
              <h2>Send Us a Message</h2>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn--primary btn--lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact__info">
              <h2>Get In Touch</h2>
              
              <div className="contact__info-item">
                <h3>Phone</h3>
                <a href="tel:+1234567890">(123) 456-7890</a>
              </div>

              <div className="contact__info-item">
                <h3>Email</h3>
                <a href="mailto:info@acbrothers.com">info@acbrothers.com</a>
              </div>

              <div className="contact__info-item">
                <h3>Hours</h3>
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 4pm</p>
                <p>Sunday: Closed</p>
                <p className="contact__emergency">24/7 Emergency Service Available</p>
              </div>

              <div className="contact__info-item">
                <h3>Service Area</h3>
                <p>Serving the greater metro area and surrounding communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
