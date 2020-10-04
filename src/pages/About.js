import React from 'react'
import LeftSideContainer from '../components/LeftSide'
import RightSide from '../components/RightSide'
import '../styles/about.scss'

const paragraphs = [
  'HAE was created to better address and shape a dynamic world through BIM.',
  'We are designers and developers of landscape architecture, urbanism and planning, technology and design strategy.',
  'Our mission is to enable and improve the space humans use to interface with their natural, \
  built and socially-constructed environments including spaces, buildings, places, and experiences.',
  'We are a BIM Consultancy company specialized in Landscape Architecture.',
  'Our purpose and core business is to help landscape designers to develop and deliver projects using BIM.']

export default () => {

  const displayAboutText = paragraphs.map(service => <p className="paragraph">{service}</p>)

  return (
    <div style={{
      display: 'flex',
      // height: '100vh',
    }}>
      <LeftSideContainer heading="about hae"/>
      <RightSide >
        <div className="aboutTextContainer">
          <div className="aboutText">{displayAboutText}</div>    
        </div>
      </RightSide >
    </div>
  )
}