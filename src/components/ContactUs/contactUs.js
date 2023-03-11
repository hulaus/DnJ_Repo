import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';

emailjs.init('Ss2oUHlj2G6GV0afL')

function ContactUs() {
  // Initialize state variables for name, email, message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef();

  // Handler function to update the state variables as the user types
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handler function to submit the form data to the server
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    var formData = new FormData(formRef.current);
    formData.append('service_id', 'service_g2lmz7g')
    formData.append('template_id', 'template_51j6gzq')
    formData.append('user_id', 'Ss2oUHlj2G6GV0afL');

    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData
    }).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your mail is sent!');
    }).catch(function(error) {
      console.log('FAILED...', error);
      alert('Oops... ' + JSON.stringify(error));
    });

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="SimpleForm">
      <h2>Contact Us</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={message} onChange={handleMessageChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;

/*  .then((result) => {
            console.log(result.text);
            alert('Your message has been sent successfully!');
        })
        .catch((error) => {
            console.log(error.text);
            alert('There was an error sending your message. Please try again later.');
        }); */