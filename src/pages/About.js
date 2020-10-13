import React from 'react'
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
    <div className="aboutContainer pageContainer">
      <div className="leftSideContainer">      
        <h1 className="heading">about hae</h1>    
        <h2>BIM Consultancy for Landscape Architecture</h2>
      </div>
      <div className="rightSideContainer aboutRightSide">
        <div className="aboutTextContainer">
          <div className="aboutText">{displayAboutText}</div>    
        </div>
      </div>
    </div>
  )
}