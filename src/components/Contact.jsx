import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const colors = {
  Background: "#020100",
  Text: "#ffffff",
  Accent: "#8884ff",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n3ifsm4', 'template_w9lrk67', e.target, 'XNvdVrsHDRqb4lSdu')
      .then(
        (result) => {
          console.log(result.text);
          alert('Thank you for contacting me. I will get back to you as soon as possible!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNameError(false);
    setEmailError(false);
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(!name);
    setEmailError(!validateEmail(email));

    if (name && validateEmail(email)) {
      sendEmail(e);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4' style={{backgroundColor: colors.Background, margin: 'auto'}}>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline' style={{color: colors.Text, borderBottom: `4px solid ${colors.Accent}`}}>Contact</p>
        </div>
        <div className='mb-4'>
          <input className={`bg-[#ccd6f6] p-2 ${nameError ? 'border-white' : ''}`} type="text" placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)} onBlur={() => setNameError(!name)} style={{color: '#000'}} />
          {nameError && <p className='text-[#8884ff]'>This field is required</p>}
        </div>
        <div className='mb-4'>
          <input className={`bg-[#ccd6f6] p-2 ${emailError ? 'border-white' : ''}`} type='text' placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => setEmailError(!validateEmail(email))} style={{color: '#000'}} />
          {emailError && <p className='text-[#8884ff]'>Please enter a valid email address</p>}
        </div>
        <div className='mb-4'>
          <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)} style={{color: '#000'}}></textarea>
        </div>
        <button className='text-white border-2 rounded-lg hover:bg-[#8884ff] hover:border-[#8884ff] px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

