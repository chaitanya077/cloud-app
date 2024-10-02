// components/ContactForm.js


"use client"
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(res);

    if (res.ok) {
      setSuccess(true);
      setError(false);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <form className='d-flex flex-column py-5 my-5' onSubmit={handleSubmit}>
      <label className="form-label">
        Name:
        <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label className="form-label">
        Email:
        <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label className="form-label">
        Message:
        <textarea  className="form-control" name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button className='btn btn-warning' type="submit">Submit</button>
      {success && <p>Message sent successfully!</p>}
      {error && <p>Failed to send message. Please try again.</p>}
    </form>
  );
};

export default ContactForm;
