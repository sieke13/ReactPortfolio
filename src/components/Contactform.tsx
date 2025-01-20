import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (field: string) => {
    if (field === 'name' && !name) {
      setErrors({ ...errors, name: 'Name is required' });
    } else if (field === 'email' && !email) {
      setErrors({ ...errors, email: 'Email is required' });
    } else if (field === 'email' && !validateEmail(email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else if (field === 'message' && !message) {
      setErrors({ ...errors, message: 'Message is required' });
    }
  };

  return (
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur('name')}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur('message')}
        />
        {errors.message && <span>{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;