import React from 'react'

import '../styles/contact-form.scss'

const ContactForm = () => {
  return (
    <div className="mainFormContainer">
      <form
        action="https://formspree.io/FORM_ID"
        method="POST"
        className="formContainer"
      >
        <div class="inputContainer">
          <label>Name</label>
          <input type="text" name="name"  style={{ borderRadius: '4px', padding: '10px'}}/>
        </div>
        <div class="inputContainer">
          <label>Email</label>
          <input type="email" name="_replyto" style={{ borderRadius: '4px', padding: '10px'}}/>
        </div>
        <div class="inputContainer">
          <label>Message</label>
          <textarea name="message" style={{ borderRadius: '4px', padding: '10px'}}></textarea>
        </div>
        <input type="submit" value="Send" className="submitBtn"/>
      </form>
    </div>
  );
}


export default ContactForm;
