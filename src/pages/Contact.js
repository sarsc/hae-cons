import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/contact.scss';

export default () => (
  <div className="pageContainer contactContainer">
    <div className="">
      <h1 className="heading">be in touch</h1>
    </div>
    <div className="contactRigthSide">
      <ContactForm />
    </div>
  </div>
);
