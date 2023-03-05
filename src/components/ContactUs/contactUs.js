import React, { useState } from "react";

function ContactUs() {
  // Initialize state variables for name, email, message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    // Add your code to send the data to the server using an API call or other means
    // You can also display a success message or clear the form after submission
  };

  return (
    <div className="SimpleForm">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
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