import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {

  const [state, handleSubmit] = useForm("meqweqwn");
  if (state.succeeded) {
      return <p>Your message is sent!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <div className='container'>
      <label htmlFor="email">
    Your  Email: 
      </label>
      <input className='email'
        id="email"
        type="email" 
        name="email"
        placeholder="email..."
        required=""
      /></div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <div className='container'>
       <label htmlFor="text">
    Your  Message: 
      </label>
      <textarea className='message'
        id="message"
        name="message"
        placeholder="your message..."
        required=""
      /></div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className='container'>
      <button className='send btn' type="submit" disabled={state.submitting}>
        Send
      </button></div>
    </form>
  );
}
function Formspree() {
  return (
    <ContactForm />
  );
}
export default Formspree;
