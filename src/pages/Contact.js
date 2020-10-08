import React from 'react'
import ContactForm from '../components/ContactForm'
import LeftSideContainer from '../components/LeftSide'
import RightSide from '../components/RightSide'
// import '../styles/contact.scss'

export default () => {

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
    }}>
      <LeftSideContainer heading="get in touch"/>
      <RightSide >
        <ContactForm />
      </RightSide>
    </div>
  )
}