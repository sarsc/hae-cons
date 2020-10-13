import React from 'react'
import ContactForm from '../components/ContactForm'
import '../styles/contact.scss'

export default () => {

  return (
    <div  
      className="pageContainer" 
      style={{
      height: '100vh',
      position: 'relative',
    }}>
      <div className="leftSideContainer">          
        <h1 className="heading">get in touch</h1>
      </div>
      <div className="leftBackground"></div>
      <div className="rightSideContainer contactRigthSide">
        <ContactForm />
      </div>
    </div>
  )
}