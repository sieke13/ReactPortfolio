import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const email = 'gera.ave2@gmail.com';
  const defaultSubject = 'Portfolio Contact Request';
  const defaultBody = 'Hello Gerardo,\n\nI visited your portfolio website and would like to connect with you regarding...';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(defaultBody)}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const formSubject = formData.subject || 'Portfolio Contact Request';
    const formBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const customMailtoLink = `mailto:${email}?subject=${encodeURIComponent(formSubject)}&body=${encodeURIComponent(formBody)}`;
    
    // Open email client
    window.location.href = customMailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'gera.ave2@gmail.com',
      link: mailtoLink,
      description: 'Send me an email directly'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+52 555 102 1657',
      link: 'tel:+525551021657',
      description: 'Available during business hours'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/gerardo-avendaño-0b78008b',
      description: 'Let\'s build our professional network'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'Follow my work',
      link: 'https://github.com/sieke13',
      description: 'Check out my code repositories'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, collaborating on interesting projects, 
          or just having a conversation about technology and development.
        </p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h3 className="subsection-title">Send Message</h3>
            
            {isSubmitted && (
              <div className="success-message">
                <FaCheckCircle />
                <span>Email client opened! Your message is ready to send.</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>
              
              <button type="submit" className="submit-button">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="contact-methods-section">
            <h3 className="subsection-title">Contact Methods</h3>
            
            <div className="contact-methods-grid">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method-card">
                  <div className="method-icon">
                    {method.icon}
                  </div>
                  <h4 className="method-title">{method.title}</h4>
                  <a 
                    href={method.link} 
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="method-link"
                  >
                    {method.value}
                  </a>
                  <p className="method-description">{method.description}</p>
                </div>
              ))}
            </div>

            <div className="location-info">
              <div className="location-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="location-text">
                <h4>Location</h4>
                <p>Mexico City, Mexico</p>
                <span>Open to remote opportunities worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;